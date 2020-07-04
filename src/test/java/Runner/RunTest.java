package Runner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(monochrome=true,plugin={"html:target/cucumber_output_html_report"},

 features="src/main/java/Feature/search.feature",glue= {"stepDefinition"}
		
		)
//Under glue we have to mention the Foldername where step definition are present..
//No need to mention the path of the exact feature file step definition..Test runner will automatically identifies the stepdefinition of the 
//feature file automatically
//~...This is called as negate symbol

//tags={"@smoke,@sanity"}...This is ored condition ..where scenarios with @smoke executed and scenario with @sanity are executed
//tags={"@smoke","@sanity")..this Anded nand condition ...where scenario with both smoke and sanity are only executed smoke and dsanity alone are not executed



public class RunTest{
	
}
