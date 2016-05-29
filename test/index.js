describe('Array', function  () {
    var arr;
    before(function() {
        arr = [ 2, 4, 0, 0];
    });

    it('Shoul be an array', function() {
        expect(arr).to.be.an.instanceof(Array);
    });

    it('Should contain more than 3 elements', function() {
        expect(arr).to.have.length.above(3);
    });

    it('Should include 2', function() {
        expect(arr).include(2);
    });

    it('should take less than 500ms', function(done) {
        this.timeout(500);
        setTimeout(done, 400);
    });

    it('Last element should be 0', function() {
        expect(arr[arr.length - 1]).to.equal(0);
    });
});
