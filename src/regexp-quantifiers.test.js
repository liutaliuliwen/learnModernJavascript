describe("five digits number", () => {
    test("exact quantifier", () => {
        expect("I'm 12345 years old".match(/\d{5}/)).toContain("12345")
    });

    test("range quantifier", () => {
        expect("I'm not 12, but 1234 years old".match(/\d{3,5}/)).toContain("1234");
    });

    test("greater than", () => {
        expect("I'm not 12, but 345678 years old".match(/\d{3,}/)).toContain("345678");
    });

    test("find all sequence digits", () => {
        expect("+7(903)-123-45-67".match(/\d+/g)).toEqual(["7", "903", "123", "45", "67"]);
        expect("+7(903)-123-45-67".match(/\d{1,}/g)).toEqual(["7", "903", "123", "45", "67"]);
    });

    test("+", () => {
        expect("+7(903)-123-45-67".match(/\d+/g)).toEqual(["7", "903", "123", "45", '67']);        
    });

    test("?", () => {
        expect("Should U write color or colour".match(/colou?r/g)).toEqual(["color", "colour"]);
    });


    test("*", () => {
        expect("100 10 1".match(/\d0*/g)).toEqual(["100", "10", "1"]);
        expect("100 10 1".match(/\d0+/g)).toEqual(["100", "10"]);
    });

    test("more example", () => {
        expect("0 1 12.345 7890".match(/\d+\.\d+/g)).toEqual(["12.345"]);
        expect("<body>...</body>".match(/<[a-z]+>/gi)).toEqual(["<body>"]);
        expect("<h1>Hi!</h1>".match(/<[a-z][a-z0-9]+>/gi)).toEqual(["<h1>"]);
        expect("<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]+>/gi)).toEqual(["<h1>","</h1>"]);
    });

    test("task", () => {
        let reg = /\.{3,}/g;
        expect("Hello!... How goes?.....".match(reg)).toEqual(["...", "....."]);

        reg = /#[a-fA-F0-9]{6}\b/g;
        expect("color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678".match(reg)).toEqual(['#121212', '#AA00ef']);
    });
})

// Invoke-WebRequest -Uri "http://localhost:8000/api/child/childInfo/exportChildInfoBathQueryExcel" `
// -Method "POST" `
// -Headers @{
// "Authorization"="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZXBpLWNsb3VkIl0sInNjb3BlIjpbImFsbCJdLCJkZXB0SWQiOiIxMWVhODYxM2I5OWQwMGZmMDQxMDY0MjE3ZTQ3MTcwNiIsInVzZXJOYW1lIjoiYWRtaW4iLCJleHAiOjE1OTg1OTEwNTQsInVzZXJJZCI6IjAzQTg5ODI3RjcwMDExRThCN0VCMDAxNjNFMDY1REU1IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9TVVBFUkFETUlOIl0sImp0aSI6ImZmNWYxZTE2LTIwMGEtNDc1ZC04ZTI5LTA0MGJhNTFkZWRhZiIsImNsaWVudF9pZCI6InppZ2luIn0.88I4kTBGEP74lkVsFWN_vvy08GT09Hurxybl4ImpAYI"
//   "User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
//   "Accept"="*/*"
//   "Origin"="http://localhost:8000"
//   "Sec-Fetch-Site"="same-origin"
//   "Sec-Fetch-Mode"="cors"
//   "Sec-Fetch-Dest"="empty"
//   "Referer"="http://localhost:8000/childNewCard/personalQuery"
//   "Accept-Encoding"="gzip, deflate, br"
//   "Accept-Language"="zh,en;q=0.9,en-US;q=0.8"
//   "Cookie"="_ga=GA1.1.541510223.1590041320; p_h5_u=F49E3982-B5BD-4C93-BF45-25C8227F8E3B"
// } `
// -ContentType "multipart/form-data; boundary=----WebKitFormBoundaryXFm0SzByN1A8irry" `
// -Body ([System.Text.Encoding]::UTF8.GetBytes("------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"deptId`"$([char]13)$([char]10)$([char]13)$([char]10)11ea8613b99d00ff041064217e471706$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"pageIndex`"$([char]13)$([char]10)$([char]13)$([char]10)1$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"pageSize`"$([char]13)$([char]10)$([char]13)$([char]10)10$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"otherFiles`"; filename=`"$([char]25209)$([char]37327)$([char]20010)$([char]26696)$([char]26597)$([char]35810)$([char]27169)$([char]26495) (1).xls`"$([char]13)$([char]10)Content-Type: application/vnd.ms-excel$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"childCode`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"childName`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"areaCode`"$([char]13)$([char]10)$([char]13)$([char]10)360000$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"sex`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"time1`"$([char]13)$([char]10)$([char]13)$([char]10)1$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"motherName`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"category`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"electronicCode`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"householdAttribute`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"registrationAttribute`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"registrationStatus`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"vaccineMinorId`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"manufacturerId`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"time2`"$([char]13)$([char]10)$([char]13)$([char]10)2$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"startBirthday`"$([char]13)$([char]10)$([char]13)$([char]10)2020-08-01$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"endBirthday`"$([char]13)$([char]10)$([char]13)$([char]10)2020-08-28$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"vaccinationStartTime`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry$([char]13)$([char]10)Content-Disposition: form-data; name=`"vaccinationEndTime`"$([char]13)$([char]10)$([char]13)$([char]10)$([char]13)$([char]10)------WebKitFormBoundaryXFm0SzByN1A8irry--$([char]13)$([char]10)"))


