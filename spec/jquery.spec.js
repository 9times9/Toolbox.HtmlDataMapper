describe("should work with jQuery collections", function(){
    var data = {dataIndex: "123"},
        mapper = new _9times9.Toolbox.HtmlDataMapper(),
        nodeSpy = {val: function(){}},
        mappingData = {
            dataIndex: nodeSpy
        }
    ;

    beforeEach(function(){
        spyOn(nodeSpy, 'val');
        mapper.map(data, mappingData);
    })

    it("should use val() if available for node", function() {
        expect(nodeSpy.val).toHaveBeenCalledWith("123");
    })
})