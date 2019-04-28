require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest
  test "invalid login flash should appear only once" do
    get login_path
    post login_path, params: { session: { email: "", password: "" }}
    assert_not flash.empty?, "Flash message missing"
    get root_path
    assert flash.empty?, "Flash message remains too long"
  end
  
end
