import chai from 'chai';
import chaiString from 'chai-string';
chai.should();
chai.use(chaiString);

describe('the index file', () => {
   
    let reminderModule;
    let checkWaterReminderMessage;
    describe('when loaded', () => {  
        before(() => {
            reminderModule = require('../app/reminder');
            checkWaterReminderMessage = reminderModule.CheckWater();
        });       

        
        it('should write a message to the console reminding the user to feed the kitties', () => {
           checkWaterReminderMessage.should.equal('Check your pets water and food, make sure its all fine :)');
        });
    });
});