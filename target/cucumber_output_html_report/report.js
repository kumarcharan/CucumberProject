$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/search.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1572100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Login Details simple asfsdfzdffhsfhsfgfx",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Precondition",
  "keyword": "Given "
});
formatter.match({
  "location": "AppStepdefs.precondition()"
});
formatter.result({
  "duration": 1157772700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#dfsdgdsfgds"
    },
    {
      "line": 9,
      "value": "#comments in feature file we have to use Hash"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AppStepdefs.i_am_login_page()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "location": "AppStepdefs.enter_username_and_password()"
});
formatter.result({
  "duration": 66100,
  "status": "passed"
});
formatter.match({
  "location": "AppStepdefs.login_Successfully()"
});
formatter.result({
  "duration": 332400,
  "status": "passed"
});
formatter.after({
  "duration": 67600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Login Details simple asfsdfzdffhsfhsfgfx",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Precondition",
  "keyword": "Given "
});
formatter.match({
  "location": "AppStepdefs.precondition()"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Second testcase",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "second testcase Enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "should Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AppStepdefs.second_testcase()"
});
formatter.result({
  "duration": 167000,
  "status": "passed"
});
formatter.match({
  "location": "AppStepdefs.second_testcase_Enter_username_and_password()"
});
formatter.result({
  "duration": 87200,
  "status": "passed"
});
formatter.match({
  "location": "AppStepdefs.should_Login_Successfully()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Secondplace testcase",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "secondplace testcases Enter \u0027\u003cusernames\u003e\u0027 and \u0027\u003cpasswords\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "should and Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;;",
  "rows": [
    {
      "cells": [
        "usernames",
        "",
        "passwords"
      ],
      "line": 30,
      "id": "title-of-your-feature;;;1"
    },
    {
      "cells": [
        "user123",
        "",
        "pass134"
      ],
      "line": 31,
      "id": "title-of-your-feature;;;2"
    },
    {
      "cells": [
        "user212",
        "",
        "pass234"
      ],
      "line": 32,
      "id": "title-of-your-feature;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 210100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Login Details simple asfsdfzdffhsfhsfgfx",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Precondition",
  "keyword": "Given "
});
formatter.match({
  "location": "AppStepdefs.precondition()"
});
formatter.result({
  "duration": 251200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Secondplace testcase",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "secondplace testcases Enter \u0027user123\u0027 and \u0027pass134\u0027",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "should and Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AppStepdefs.secondplace_testcase()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 33
    },
    {
      "val": "134",
      "offset": 47
    }
  ],
  "location": "AppStepdefs.secondplace_testcases_Enter_user_and_pass(int,int)"
});
formatter.result({
  "duration": 2229700,
  "status": "passed"
});
formatter.match({
  "location": "AppStepdefs.should_and_Login_Successfully()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.after({
  "duration": 57800,
  "status": "passed"
});
formatter.before({
  "duration": 110100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Login Details simple asfsdfzdffhsfhsfgfx",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Precondition",
  "keyword": "Given "
});
formatter.match({
  "location": "AppStepdefs.precondition()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Secondplace testcase",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "secondplace testcases Enter \u0027user212\u0027 and \u0027pass234\u0027",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "should and Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AppStepdefs.secondplace_testcase()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "212",
      "offset": 33
    },
    {
      "val": "234",
      "offset": 47
    }
  ],
  "location": "AppStepdefs.secondplace_testcases_Enter_user_and_pass(int,int)"
});
formatter.result({
  "duration": 284600,
  "status": "passed"
});
formatter.match({
  "location": "AppStepdefs.should_and_Login_Successfully()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.after({
  "duration": 60000,
  "status": "passed"
});
});