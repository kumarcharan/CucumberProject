 package stepDefinition;



import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AppStepdefs {
	
	@Before("@All")
	public void m1()
	{
		System.out.println("Before same Stepdefinition123112341241243");
	}
	@After("@All")
	public void m2()
	{
		System.out.println("After same stepDefinnition ");
	}
	@Given("^Precondition$")
	public void precondition()  {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("Stat of every scenario");
	}
	
//chararfsagfdsg,dsl
	
	@Given("^I am login page$")
	public void i_am_login_page()  {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("123124");
	//	Assert.fail();
	  
	}

	@When("^Enter username and password$")
	public void enter_username_and_password()  {
	    // Write code here that turns the phrase above into concrete actions
	  
		System.out.println("asdasdf");
	}

	@Then("^Login Successfully$")
	public void login_Successfully()  {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("xbxbcx");
	  
	}
	@Given("^Second testcase$")
	public void second_testcase() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
		System.out.println("Background also");
		System.out.println("second1");
	}

	@When("^second testcase Enter username and password$")
	public void second_testcase_Enter_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		System.out.println("second2");
	}

	@Then("^should Login Successfully$")
	public void should_Login_Successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println("Derrtt");
	}
	
	@Given("^Secondplace testcase$")
	public void secondplace_testcase() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  
	}

	@When("^secondplace testcases Enter 'user(\\d+)' and 'pass(\\d+)'$")
	public void secondplace_testcases_Enter_user_and_pass(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println(arg1);
	   System.out.println(arg2);
	}

	@Then("^should and Login Successfully$")
	public void should_and_Login_Successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}




	
}
