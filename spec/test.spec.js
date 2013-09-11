describe("Some basic stuff", function(){
    it("should be ok", function() {
        expect(true).toBeTruthy();
    })
})

describe("Input tests", function(){
    var data = {dataIndex: "123"},
        mapper = new HtmlDataMapper()
    ;
    it("should set input value", function() {
        var mappingData = {
                dataIndex: document.getElementById('item_with_value_property')
            }
            ;

        mapper.map(data, mappingData);

        expect(document.getElementById('item_with_value_property').value).toBe("123")

    })

    it("should ignore when there's no mapping for data", function(){
        var mappingData = {
            notExistingIndex: document.getElementById('item_with_value_property')
        }

        expect(function(){
            mapper.map(data, mappingData)
        }).not.toThrow();

    })
})