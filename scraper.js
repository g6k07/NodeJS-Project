const axios = require('axios'); 
const cheerio = require('cheerio');

const url = 'https://dl.bintray.com/ironsource-mobile/unity-adapters/';

axios(url)
    .then((response) => { 
        const html = response.data;
        const $ = cheerio.load(html);
        const adaptersMap = new Map();

        $("a").each(function() {
            var re = /^IronSource([A-Za-z]+)Adapter_v(\d+\.\d+\.\d+)\.unitypackage/;
            var m = re.exec($(this).text());

            if(m)
            {
                var versionsMap;
                if(!adaptersMap.has(m[1]))
                {
                    versionsMap= new Map();
                    versionsMap.set(m[2], $(this).attr("href"));
                    adaptersMap.set(m[1], versionsMap);
                }
                else
                {  
                    versionsMap = adaptersMap.get(m[1]);
                    versionsMap.set(m[2], $(this).attr("href"));
                    adaptersMap.set(m[1], versionsMap);
                }
            }
        });

        function mapToObject(m) {
            var o = {};
            m.forEach((v,k) => {
                if(v instanceof Map) {
                    o[k] = mapToObject(v);
                }
                else {
                    o[k] = v;
                }
            });
            return o;
        };

        
        var adaptersObject = mapToObject(adaptersMap);
        console.log(JSON.stringify(adaptersObject, null, '\t'));

    })
    .catch((error) => { console.log("Error : " + error); });

