var syphData = [
                {"year":"2004","ACT":0.9,"NSW":4.4,"NT":28.2,"QLD":2.8,"SA":0.9,"TAS":0.4,"VIC":1.7,"WA":2.5,"Aust":3.1},
                {"year":"2005","ACT":1.2,"NSW":3.5,"NT":45.5,"QLD":3.6,"SA":0.7,"TAS":1.2,"VIC":2.4,"WA":0.9,"Aust":3.1},
                {"year":"2006","ACT":0.6,"NSW":3.3,"NT":71.2,"QLD":4.4,"SA":2.7,"TAS":1,"VIC":4.5,"WA":2.4,"Aust":4.3},
                {"year":"2007","ACT":2.6,"NSW":6.6,"NT":54.9,"QLD":6.2,"SA":3.1,"TAS":1.6,"VIC":8.2,"WA":4.9,"Aust":6.8},
                {"year":"2008","ACT":1.2,"NSW":6.1,"NT":37.6,"QLD":4.6,"SA":2.9,"TAS":1.6,"VIC":7.2,"WA":8.1,"Aust":6.2},
                {"year":"2009","ACT":3.1,"NSW":7.5,"NT":16.8,"QLD":4.4,"SA":2.3,"TAS":2,"VIC":7.2,"WA":4,"Aust":6},
                {"year":"2010","ACT":3.9,"NSW":6,"NT":18.7,"QLD":5.2,"SA":1.4,"TAS":1.2,"VIC":5.5,"WA":3.5,"Aust":5.1},
                {"year":"2011","ACT":2.7,"NSW":5.9,"NT":13,"QLD":7.6,"SA":1.1,"TAS":1.2,"VIC":6,"WA":5.3,"Aust":5.7},
                {"year":"2012","ACT":4,"NSW":7.2,"NT":5.9,"QLD":8.5,"SA":2.7,"TAS":2.7,"VIC":8.5,"WA":3.1,"Aust":6.9},
                {"year":"2013","ACT":2.6,"NSW":8.3,"NT":9.5,"QLD":7.2,"SA":2.5,"TAS":3.9,"VIC":11.2,"WA":3.3,"Aust":7.6},
                {"year":"2014","ACT":4.7,"NSW":10.1,"NT":29.6,"QLD":8.4,"SA":1.7,"TAS":2.7,"VIC":11.2,"WA":3.6,"Aust":8.7},
                {"year":"2015","ACT":3.6,"NSW":9.8,"NT":83.8,"QLD":12,"SA":4.1,"TAS":2.9,"VIC":15.8,"WA":6.3,"Aust":11.5},
                {"year":"2016","ACT":3.3,"NSW":9.9,"NT":93.7,"QLD":14.1,"SA":5.1,"TAS":1,"VIC":17.5,"WA":12.9,"Aust":13.2},
                {"year":"2017","ACT":0.8,"NSW":0.3,"NT":7.4,"QLD":1.9,"SA":0,"TAS":0,"VIC":0.8,"WA":0.9,"Aust":0.9}
            
            ];

var chlamData = [
                {"year":"2004","ACT":191.8,"NSW":148.7,"NT":799.8,"QLD":227.6,"SA":157.3,"TAS":127.6,"VIC":154.5,"WA":218.6,"Aust":179.7},
                {"year":"2005","ACT":215.7,"NSW":166.1,"NT":788.4,"QLD":243.4,"SA":178,"TAS":178.5,"VIC":178.2,"WA":269.4,"Aust":202.8},
                {"year":"2006","ACT":251.1,"NSW":176.3,"NT":976.6,"QLD":299.2,"SA":204.4,"TAS":213.1,"VIC":195.7,"WA":297.6,"Aust":229.8},
                {"year":"2007","ACT":266.5,"NSW":180.1,"NT":1013.9,"QLD":309.1,"SA":222.9,"TAS":227.5,"VIC":214.3,"WA":365.4,"Aust":247.1},
                {"year":"2008","ACT":287.9,"NSW":199.6,"NT":1038.1,"QLD":352.6,"SA":231.2,"TAS":295.6,"VIC":231.1,"WA":397.1,"Aust":272.7},
                {"year":"2009","ACT":268,"NSW":212,"NT":1081.7,"QLD":385.6,"SA":239.3,"TAS":290.7,"VIC":260.8,"WA":394.2,"Aust":291.4},
                {"year":"2010","ACT":320.9,"NSW":255.7,"NT":1158.5,"QLD":436.1,"SA":270.6,"TAS":394.6,"VIC":302.7,"WA":444.2,"Aust":337.8},
                {"year":"2011","ACT":342.7,"NSW":285.1,"NT":1136.7,"QLD":416.5,"SA":321.2,"TAS":347.2,"VIC":348,"WA":496.1,"Aust":363.1},
                {"year":"2012","ACT":342,"NSW":291.6,"NT":1154,"QLD":412.2,"SA":306,"TAS":347.8,"VIC":361.4,"WA":484,"Aust":365.9},
                {"year":"2013","ACT":333.4,"NSW":281.3,"NT":1238.8,"QLD":437,"SA":331.2,"TAS":299.8,"VIC":340.8,"WA":466.9,"Aust":362.5},
                {"year":"2014","ACT":310.6,"NSW":304.9,"NT":1231.5,"QLD":447.8,"SA":326,"TAS":345,"VIC":341.3,"WA":443.6,"Aust":370},
                {"year":"2015","ACT":323.8,"NSW":296.8,"NT":1119.8,"QLD":443.2,"SA":316.9,"TAS":322.4,"VIC":105.4,"WA":430.3,"Aust":303.9},
                {"year":"2016","ACT":348.3,"NSW":341.7,"NT":1086.3,"QLD":475.3,"SA":322.5,"TAS":307.9,"VIC":33.3,"WA":456.1,"Aust":309.6},
                {"year":"2017","ACT":36.3,"NSW":40.5,"NT":81,"QLD":51,"SA":36.4,"TAS":0.6,"VIC":0.1,"WA":49.9,"Aust":32.7},
            ];

var gonoData = [
                {"year":"2004","ACT":10.7,"NSW":21.3,"NT":781.4,"QLD":30.5,"SA":24.4,"TAS":5.8,"VIC":22.3,"WA":71.4,"Aust":35.6},
                {"year":"2005","ACT":10.3,"NSW":23.3,"NT":878,"QLD":35.8,"SA":26.2,"TAS":7.2,"VIC":24,"WA":78.2,"Aust":39.6},
                {"year":"2006","ACT":10.2,"NSW":25.4,"NT":843.2,"QLD":38.3,"SA":32,"TAS":3.7,"VIC":25.5,"WA":81.3,"Aust":41.6},
                {"year":"2007","ACT":13.2,"NSW":20,"NT":744.9,"QLD":32.6,"SA":28.8,"TAS":7.7,"VIC":18.9,"WA":83.4,"Aust":36.3},
                {"year":"2008","ACT":6.1,"NSW":19,"NT":703.4,"QLD":38,"SA":30.3,"TAS":5,"VIC":17.4,"WA":77.8,"Aust":35.7},
                {"year":"2009","ACT":15.5,"NSW":23.4,"NT":686.2,"QLD":41.3,"SA":22.9,"TAS":4.2,"VIC":27.8,"WA":60.2,"Aust":38.1},
                {"year":"2010","ACT":15.5,"NSW":32.2,"NT":841.2,"QLD":54.1,"SA":28.9,"TAS":3.9,"VIC":32.1,"WA":61.2,"Aust":46.9},
                {"year":"2011","ACT":34.8,"NSW":39.9,"NT":844,"QLD":65.9,"SA":26.8,"TAS":3.7,"VIC":34.1,"WA":78.1,"Aust":54.2},
                {"year":"2012","ACT":24.5,"NSW":56.5,"NT":772.8,"QLD":58.9,"SA":32.8,"TAS":6.8,"VIC":43.7,"WA":86.6,"Aust":61.1},
                {"year":"2013","ACT":29.9,"NSW":57.1,"NT":806,"QLD":58.7,"SA":48.3,"TAS":13.4,"VIC":52.9,"WA":78.4,"Aust":64.5},
                {"year":"2014","ACT":31.1,"NSW":64.7,"NT":715.4,"QLD":57.7,"SA":43.7,"TAS":12.6,"VIC":55.9,"WA":85.8,"Aust":67},
                {"year":"2015","ACT":36.1,"NSW":71.6,"NT":749.3,"QLD":63.5,"SA":46.8,"TAS":10.8,"VIC":83.7,"WA":87,"Aust":78},
                {"year":"2016","ACT":51.4,"NSW":91.9,"NT":729.6,"QLD":84.1,"SA":65.4,"TAS":15.9,"VIC":92.8,"WA":129.8,"Aust":97},
                {"year":"2017","ACT":7.4,"NSW":14,"NT":55.2,"QLD":12.6,"SA":6.5,"TAS":3.7,"VIC":12.7,"WA":14.9,"Aust":13.1},
            ];