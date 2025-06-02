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
       @focus
      Scenario Outline: add employee
            Given user launch the application
            When user enter username "Admin" and password "admin123"
            And user clicks on login button
            Then user navigate to dashboard
            And user need clicks on PIM
            And user need clicks on addemployee
            #And user enter the firstname "maruthi" and lastname "prasad"
            And user enter the "<firstname>" and "<lastname>"
            And user enter the id number "12345"
            Then user clicks save button

      # @focus
      # Scenario Outline: add employee
      #       Given user launch the application
      #       When user enter username "Admin" and password "admin123"
      #       And user clicks on login button
      #       Then user navigate to dashboard
      #       And user need clicks on PIM
      #       And user need clicks on addemployee
      #       #And user enter the firstname "maruthi" and lastname "prasad"
      #       And user enter the "<firstname>" and "<lastname>"
      #       And user enter the id number "12345"
      #       Then user clicks save button


            Examples:
                  | firstname | lastname |
                  | sai       | venkat   |
                  | venky     | gowda    |
                  | maruthi   | prasad   |