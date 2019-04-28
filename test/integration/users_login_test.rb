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
    assert_redirected_to @user
    follow_redirect!
    assert_select "a[href=?]", login_path, count: 0
    assert_select "a[href=?]", logout_path
    assert_select "a[href=?]", user_path(@user)
  end
  
end
