Feature: verify login functionality

      positive and negitive text cases for login functionality

      Scenario: verify login funtionalities with valid creds
            Given user launch the application
            When user enter username "Admin" and password "admin123"
            And user clicks on login button
            Then user navigate to dashboard


      Scenario: verify login funtionalities with valid username and invalid password
            Given user launch the application
            When user enter username "Admin" and password "JDBSWAKJ"
            And user clicks on login button
            Then it will show error mesaage



      Scenario: verify login funtionalities with both Invalid creds
            Given user launch the application
            When user enter username "jhdagfcj" and password "JDBSWAKJ"
            And user clicks on login button
            Then it will show error mesaage


      Scenario: add employee
            Given user launch the application
            When user enter username "Admin" and password "admin123"
            And user clicks on login button
            Then user navigate to dashboard
            And user need clicks on PIM
            And user need clicks on addemployee
            And user enter the firstname "maruthi" and lastname "prasad"
            And user enter the id number "010820"
            Then user clicks save button