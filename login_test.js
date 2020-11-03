Feature('teste');

    Scenario('Acessar a url e efetuar uma pesquisa valida', (I) => {
      //Preenchimento dos campos de pesquisa 
        I.amOnPage('home');
        I.click('Hotels');
        I.click('Search by Hotel or City Name');
        I.fillField({ css: 'input[class=select2-input]'}, 'London');
        I.wait(3);
        I.pressKey('Enter');
        I.see('CHECK IN');
        I.fillField('input[id=checkin]', '12/10/2020');
        I.see('CHECK OUT');
        I.fillField('input[id=checkout]', '05/11/2020');
        I.click('//*[@id="hotels"]/div/div/form/div/div/div[3]/div/div/div/div/div/div/div[1]/div/div[2]/div/span/button[2]')
        I.wait(5);
        I.click('Search');
        I.saveScreenshot('procuraRealizada.jpg');
      });

      Scenario('Efetuar uma pesquisa valida e ver os hotel disponivel', (I) => {
        //Preenchimento dos campos de pesquisa 
        I.amOnPage('home');
        I.click('Hotels');
        I.click('Search by Hotel or City Name');
        I.fillField({ css: 'input[class=select2-input]'}, 'London');
        I.wait(3);
        I.pressKey('Enter');
        I.see('CHECK IN');
        I.fillField('input[id=checkin]', '12/10/2020');
        I.see('CHECK OUT');
        I.fillField('input[id=checkout]', '05/11/2020');
        I.click('//*[@id="hotels"]/div/div/form/div/div/div[3]/div/div/div/div/div/div/div[1]/div/div[2]/div/span/button[2]');
        I.wait(5);
        I.pressKey('Enter');
        //I.click('Search');

        //Selecionar o hotel disponivel
          //Selecionar o quarto
        I.see('Total listings found');
        I.click('Details');
        I.wait(5);
        I.see('Available Rooms');
        I.checkOption("Select Room");
        I.wait(5);
        I.click('Book Now');

        //Preechimento de cadastro e efetuar a reserva
        I.see('Personal Details');
        I.fillField('First Name', 'Mario');
        I.fillField('Last Name', 'Romero');
        I.fillField('Email', 'marior@teste.com');
        I.fillField('Confirm', 'marior@teste.com');
        I.fillField('Contact Number', '999999999');
        I.fillField('Address', 'Alameda fenomena, 12');
        I.pressKey('Tab');
        I.click('//*[@id="guestform"]/div[5]/div/div[2]');
        I.fillField('input[class=chosen-search-input]', 'United Kingdom');
        I.wait(5);
        I.pressKey('Enter');
        I.click('CONFIRM THIS BOOKING');
        I.wait(3);
        I.click('Pay on Arrival');
        I.see('Your booking status is Reserved');
        I.saveScreenshot('reservaRealizada.jpg');
      });

      Scenario('Acessar a url e efetuar uma pesquisa inválida', (I) => {
         I.amOnPage('home');
         I.click('Hotels');
         I.click('Search by Hotel or City Name');
         I.fillField({ css: 'input[class=select2-input]'}, 'Brazil');
         I.wait(4);
         I.pressKey('Enter');
         I.seeElement('//*[@id="select2-drop"]/ul/li');
         I.saveScreenshot('pesquisaInválida.jpg');
       });


