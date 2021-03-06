require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:Jill)
  end

  test "invalid login flash should appear only once" do
    get login_path
    post login_path, params: { session: { email: "", password: "" }}
    assert_not flash.empty?, "Flash message missing"
    get root_path
    assert flash.empty?, "Flash message remains too long"
  end

  test "login with valid information" do
    get login_path
    post login_path, params: { session: {email: @user.email,
                                         password: 'password'}}
    assert is_logged_in?
    assert_redirected_to @user
    follow_redirect!
    assert_select "a[href=?]", login_path, count: 0
    assert_select "a[href=?]", logout_path
    assert_select "a[href=?]", user_path(@user)
    delete logout_path
    assert_not is_logged_in?
    assert_redirected_to root_url
    #simulate a user clicking logout in a second browser window
    delete logout_path
    follow_redirect!
    assert_select "a[href=?]", login_path
    assert_select "a[href=?]", logout_path, count: 0
    assert_select "a[href=?]", user_path(@user), count: 0
  end

  test "login with remembering" do
    log_in_as(@user, remember_me: '1')
    assert_not_empty cookies[:remember_token]
  end

  test "login without remembering" do
    #Log in to set cookie
    log_in_as(@user, remember_me: '1')
    #Log in again and verify cookie is deleted
    log_in_as(@user, remember_me: '0')
    assert_empty cookies[:remember_token]
  end
end
