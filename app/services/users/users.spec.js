describe('Users Factory',function(){
    var Users;   
    
    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane',
            pokemon: { name: 'blastoise' }
          },
          {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob',
            pokemon: { name: 'growlithe' }
          },
          {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo',
            pokemon: { name: 'hitmonchan' }
          },
          {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill',
            pokemon: { name: 'barney' }
          }
          
    ];

    //The single user we expect to receive when calling findById('2')
    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: { name: 'growlithe' }
      };
        
    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function(_Users_){
        Users = _Users_;
       
    }));

    it('should exist', function(){
        expect(Users).toBeDefined();
    });

    it('has a dummy spec to test 2+2',function(){
        expect(2+2).toEqual(4);
    });


     // A set of tests for our Users.all() method
    describe('.all()', function() {
        // A simple test to verify the method all exists
        it('should exist', function() {
            expect(Users.all).toBeDefined();
        });

        // A test to verify that calling all() returns the array of users we hard-coded above
        it('should return a hard-coded list of users', function() {
            expect(Users.all()).toEqual(userList);
        });

    });

    describe('.findById()',function(){

        it('should exist',function(){
            expect(Users.findById).toBeDefined();
        });

        it('should return one user object if it exists',function(){
            expect(Users.findById('2')).toEqual(singleUser);
        })

         // A test to verify that calling findById() with an id that doesn't exist, in this case 'ABC', returns undefined
    it('should return undefined if the user cannot be found', function() {
        expect(Users.findById('ABC')).not.toBeDefined();
      });
    });

});