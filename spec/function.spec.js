describe("should work with function passed", function(){
    var data = {dataIndex: "123"},
        mapper = new _9times9.Toolbox.HtmlDataMapper(),
        mappingData = {
            dataIndex: function(value){}
        }
    ;

    beforeEach(function(){
        spyOn(mappingData, 'dataIndex');
        mapper.map(data, mappingData);
    })

    it("should call function if function is passed as node", function() {
        expect(mappingData.dataIndex).toHaveBeenCalledWith("123");
    })
})