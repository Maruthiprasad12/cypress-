Feature: verify add employee functionality

      adding employee funtionalities

      Scenario: add employee
            Given user launch the applications
            When users enter username "Admin" and password "admin123"
            And user clicks on login button
            And user navigate to dashboard
            And user need clicks on PIM
            And user need clicks on addemployee
            And user enter the firstname "maruthi" and lastname "prasad"
            And user enter the id number "010820"
            Then user clicks save button

