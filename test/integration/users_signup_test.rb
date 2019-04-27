require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest
  test "invalid signup information" do
    get signup_path
    assert_no_difference 'User.count' do
      assert_select 'form[action="/signup"]'
      post signup_path, params: { user: 
                                  { name: "",
                                    email: "user@invalid",
                                    password:              "foo",
                                    password_confirmation: "bar" }}
    end
  end

  test "valid signup" do
    assert_difference 'User.count', 1 do
      post signup_path, params: { user:
                                  { name: "Bob",
                                    email: "Bob@example.com",
                                    password:               "fakeuser",
                                    password_confirmation:  "fakeuser" }}
    end
    assert_redirected_to user_path(1)
  end
end
