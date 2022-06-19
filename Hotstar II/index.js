
    var api_key= "ccb731be";

    var container= document.getElementById("container")

async function myfun(){
    var movie= document.getElementById("movie").value
     
    var url= "http://www.omdbapi.com/?apikey="+api_key+"&t="+movie

    try{

        var res= await fetch(url)
        var data= await res.json()

        if(data.Title===undefined)
        {
            let img= document.createElement("img")
                
            img.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEBAQEA8QEg8QEA8NEA8QFRUPDxAQFRIiFhUVExMYHSggGBolGxYVITEiJSkrLi4uFyA/ODMsNygtLisBCgoKDg0OGxAQGzclHyYwLS4rLy8tLi0tMi0tLzUtLSstKy0uLSsrLS0tLi0tLy0tLS0tLy0rLS8tLS0tLSstLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAEQQAAIBAgEHCAcHAQcFAQAAAAECAAMRBAUGEhMhMVMyQVFykZKx0RQVFlJhg8IHInGBocHSoiMlQmJzsvAzNKPh8ST/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQQFAgMG/8QANxEAAgEBBAcGBQMEAwAAAAAAAAECEQMSMVEEBRMhgaHRQVJxkbHwMjM0YbIUFcEiI2LxJEJD/9oADAMBAAIRAxEAPwDu6HJXqr4TOYUOSvVXwmc+JZ9AhF5iTMS8UBJeLyHTjWRQE14vIdZGsihJNeLyHWRrIoCa8XkOsjWRQE14vIdZGsigJrxeQ6yNZFATXi8h1kayKAmvF5DrI1kUBNeLyHWRrIoCa8XkOsjWRQE14vIdZGsigJrxeQ6yNZFATXiRB5mDFCDKIESCRERAMKHJXqr4TIzGhyV6q+E9aSQRnaQBvJAH5zpaOSqSgAoGPOx2kn9pzNM/fTrr4zs5tapsoSUpSVXu7Chps5K6kzW9XUuEvZHq2lwl7JsxNjZWfdXkuhQvyz5vqa3q2lwl7I9W0uEvZNmI2Vn3V5LoL8s+b6mt6tpcJeyPVtLhL2TYvPY2Vn3V5LoL8s+b6mt6tpcJeyPVtLhL2TZiNlZ91eS6C/LPm+preraXCXsj1bS4S9k2LxeNlZ91eS6C/LPm+pr+raXCXsj1bS4S9k2YjZWfdXkugvyz5vqa3q2lwl7I9W0uEvZNmI2Vn3V5LoL8s+b6mt6tpcJeyPVtLhL2TZiNlZ91eS6C/LPm+prerqXCXsj1bS4S9k2AJ7Gys+6vJdBflnzfU1vVtLhL2R6tpcJeybMRsrPuryXQX5Z831Nb1bS4S9keraXCXsmzEbKz7q8l0F+WfN9TW9W0uEvZHq6lwl7JsxGys+6vJdBflnzfU1vV9LhDslLlfCCky6OxXBNt9iN/iJ0cpM5TtpfM/aUdY2Nn+nclFVVOxLtS7CzotpLapVxr6FYpmUjSST5tmqIiJBJhR5K9VfCHijyV6q+EPJIIU5addZ2s4pOWnXWdrN/VHwS4Gbp2MeIiImuURERAERPLwD2eT2eWgHs8tPZ5eAIvPYgCJ4DEA9iIgCIiAIiIAiIgCIiAJR5zb6PzPpl5KPObfR+Z9Mpax+mlw/JFjRPnLj6Mq0kkjSST5VmwIiIJMKPJXqr4Q8UeSvVXwh5JBCnLTrrO1nFJy066ztZv6o+CXAzdOxjxERPJrlE9ieSty7lhcJTDMukzEqiA20iN9zzASYxcnRYhuhZxOEOfFbg0f6/Oee3Fbg0f6/OWf0dr9vM42iO7gypzey4uLVvu6FRLaaXuLHcyno8JbGV5RcXdeJ2nU9nk9icgREQDwecQPOewDwT2RmoJkrgwDKeGexAETBX+8R0BT2//ACHqWIUbSeboHSZzeVK+8aepNGZxETogRE8vAPZR5zb6PzPpl3eUmc2+j8z6ZS1j9NLh+SLGi/OXH0ZVpJJGkknyrNgREQSYUeSvVXwh4o8leqvhDySCFOWnXWdrOKTlp11nazf1R8EuBm6djHiJi+4zKYkXvNcohNwnHfaGn/bN/rL/ALTOxC2nLfaCn9jRPRVK9qHyljRX/dj77DmfwnCxETZK5t5Myg+HqCrTI0gCpB2qQeYjsP5S59s8T0Ue438pzcTzlZQm6yVSU2sDo/bTE9FHuN/KPbTE9FHuN/Kc5E5/T2XdRN95nR+2mJ6KPcb+Ue2mJ6KPcb+U5yI/T2XdQvvM6P2zxPRR7jfynhzzxJ5qPdb+U52I/T2XdQvvM6H2vxHRR7rfylnm7nI9esKVVUuwYoyArYgXsQSeYGcXNnJ2P9GqpW0dPV6R0b6N7qV32Nt85no0HFqMd/YFJn1Ori1poz1GVKaKXeoxCqqgXJYncAOectjvtPyZSqCl6UHva9SkrVaKX96oot2XtNB8/gwIODuCCpBqggg7CCNDdKHLuAyLVTAUqdKhRr1sTRovRoXFcCqppkOy2NkqMjXOw6AHPKD0eUPmJ8KHqpJ4H1SnVDAOrAq6qwZTdWW1wQecWMxRQOe5O0k7yZX5t5N9EwtDCa0VWw9JaRfde3wvsHNb4Sx1S+6vYJVonRx34+/HPyPRZMnpNzSWa67x+M2JLIExZ7ATKRutwLQgZkyizl30vmfTLxpR5y76XzPplHWP00uH5I99F+auPoytSSSNJJPlWbQiIgGFHkr1V8IeKPJXqr4Q8kghTlp11namcUnLTrrO0Jm/qj4JcDN07GPEAzzzE9jzmuUTCobD85RZ8JfCX92pTbt+7+8v2W4/WVOdtO+CrDoCN2VAZ62LpaR8URLBnzKImdNCxsoJPwm4VzCJP6HU9w/pHodT3D+ki8gQRJ/Q6nuH9IOEf3D4yLyBBEROiBERAE38hUdPFUFKaamooZCNIFb/AHrjoAufymhN3I2JaliKLqbEVEB+Kk2YfmCZzNNxdMmSj6VWzfwzKynDUQGBUlUVWAI5mAuD8Z80zKwdGpjNfWXS9Ho1GoByWVKjsANBCbaRF9tr7PhPoeJxtWmzhwNF76Pw2W2HznNZIyWuGDBSzM1gzNzgbgAJ8rLXNnZWFpF1v4JNPzfZSm/Ohox0KcpRe67mmWCsQbjYRutzS2wWM09h2N+jfhKp0Kmx2HYbfiLzxTYgjYRtBnz2i6TPRZ/btXrxRpW1jG2XozohNmaGFraahufcR0Tcptsn1kZKcVKL3MxmnF0ZnMQd34T28dH4QQeM9iB0yjzl30vmfTLtl2j8pTZzb6PzPplLWP00uH5IsaL81cfRlWkkkaSSfKs2BERBJhR5K9VfCHijyV6q+EPJIIU5addZ2p55xSctOus7Tpm/qj4JcDN07GPEHmnj7jPE5/xnpF7zYKITcJoZfF8LiB00ahH5Lf8Aab4Fh+E08YulTqL7yOvatpMXvTIZ8olnkhhZh/iuD+IlYJ7N6caqhXR0cTndM9J7Y0z0ntnjsvuTeOiic7pnpPbBc9J7Y2X3F4lxrA1GK7r/AK22/rIIiey3IgRESSBMkaxB6CD2TGDCB9ZzgfRwuJbnWhVZT0MEJBH52nP5kFqmH1tU6bmq4ViBcKABzfHSlpnNW/uys3vUFHfsP3mtmhR0MFhx0q1TvuWH6ETE2UNjelFN13Oiqt3Y8SzfknRPd4mOUwVdmIOiSADzE6P/AKlRjMpJTF3dE/Ha5/AbzL/OVrYPEtzrRcqecNbYR8bz46zEm5JJO8naT+czIahjpFrK0lOkW26Jb6tt44JeNfui4tPuQUVHfh9uvofXs2cWtbDiopJBdxtFm2G23/m4iXNNrGcF9lWURUpYqje+prqw6rpb/cjTupoOxjY/244LcvAqObm7zxZsTF2sBIiYG3ZOaAnMpM5t9H5n0y7IlJnNvo/M+mUdY/TS4fkixonzlx9GVaSSRpJJ8qzYEREEmFHkr1V8IeKPJXqr4Q8kghTlp11naGcWnLTrrO1M39UfBLgZunYx4nhjzmNRrSIsembFCiSVG2WkURJ7CD5NUTRZl6CV7DaKaXIA5zabGVU0a9cdFaqP6zNdGsQRvBvN5OqqVywGAXpb9J56CvS3aPKYDKA909sesB7p7Z50mTuNbFUNA2vcHaJDJcRW0zfcBsAkU9FWm8gRESSBERAEREA7vOWt/cyn3qOEH9Sk+Eucm0dXRo0/cpU07EAnOZUOsyVgafFr4ah/UR9M6szItd0Kf5S/hdT3WPkU2eT2wOJPSir3nA/efJqmTqtTDYqtS3YZFqVOnQLWa34KGY/BTPqGfrWwFUdLUR/5Qf2ml9nOGHolUsARVqspB2goEAsfhtbtnrY2mzsXJZ9CJKsjivsdxmhjqlLmrYdvzemwYf0l59knwjKOEqZFymrquklNzVoaV9GrQYFSul0hWKn4gG20T7TkfKlPF0KeIotpU6guPeUjerDmYHYZzpUatTWDJib09BnkSodEq1Lynzm30fmfTLOVmcu+j8z6ZR1l9NLh+SLOi/OXH0ZVpJJGkknyjNgREQSYUeSvVXwh4o8leqvhDySCFOWnXWdqZxSctOus7Wb+qPglwM3TsY8SKoCeY/p5zHQPR4SeJsVKJBoHo8I0D0eEniKg+XZypo4uuP8AOG7yg/vKud5nRmy1d9dRK6ZAV0Y2DWFgQem1hY9EoPZHFcNO+vnNey0izcFVng4upRRL32RxXDTvr5x7I4rhp31856baz7y811IuvIool77I4rhp31849kcVw076+cbaz7y811F15FFEvfZHFcNO+vnHsjiuGnfXzjbWfeXmuouvIool77I4rhp31849kcVw076+cbaz7y811F15FFEvfZHFcNO+vnPRmjivcW3PZ1P6Xjb2feXmhdeRaYAazDZKp7//ANdWpb/TFRvKdZoHo8JWZFyMaWrapb+xRqVGmp0gumb1HZud2Nt2xRsF98uplW9opS/pw382304ntFbjj/tHJXBAEcqvTXm6Gb9pPmDSPoFI25TVjzcQj9pB9plJ3w1FUR3PpAchFLEAU2FzbrSzzHplcBh1ZSrAVLqwII/tW3gztv8A468epH/YgzwzaXKGHNIgLVW70Kuz7lS24/5TuI/cCfKMzs4amScVUo4hWWiX1eJpHaabjZrFHORs3cpbb7Cfe589+1LNnD1EGPqVdQaNkrlVDPXT/AiKSAat7KCTax27FEWFqqbOeD9+/vQlrtR29I6aq6EMjAMrKQVZSLgg32i0k0D0eE437PM4qddnwmDwldMBhqQFLE1SWLVNL7yvvAJ0tIAHcDsGwTuZXludCSJEN9o8JUZzb6PzPpl5KPObfR+Z9Moax+mlw/JFnRPnLj6Mq0kkjSST5VmwIiIJMKPJXqr4Q8UeSvVXwh5JBCnLTrrO1nFJy066ztZv6o+CXAzdOxjxERE1yiIiIAiIgCJ45sCegEziskfaCmIo4SouHKviMdSyfUpF9tHWKXSoDo/fUhegbb7dk6jCUlVe/dGDtolVk3OPC4mq1GhiEqVFDNogMNJVbRYoxFnAOwlSZSY7PU0auL08IThcFWo0MRiVqgsmtAIfUlRdRpC9jeSrObdEt5FTsIlLUzrwYqVKXpCmrS1oZVV2BekmnURXA0WcLtKgkjomnhM+cG9CjXqVTRFZXcU3VmdFQ2Zn0AQEBI+/ydu+FZzfYTU6aJRZz5wHBrhjTpLWOKxC4ZNKqKKDSQsGL6JFvu/rPK+Wqq0KJ1FP0vE1Th6FFK2to6QDMXesqj7gRGY2F9lhtMhRbSeYL6JzeKxmMwaiviHw1fDArr9RSehUw6E2NRdKo4qKtwSNhsCdu6WVXL2GVnVqyhqdelhHFm+7Xq21abt5uNu7bF14oFlNHKvpOrPoow5raS2GILrS0f8AFtQE3/KaWFzswVVyiYpNIJVqm4dF0aX/AFDpMoH3bEkXvbbukGQ86qeMxVWjQs9Cnh6OIWtZ1ZmdypXQYAgWAIPPpSbklXcQc1lDIOXq1Va3rDCUihLJTovUSkptbahpHT2E8u87TIlHEph6S4uotTEqtqtRLBXa5sR90c1uYSziQ5VFCOzf8tOWzhzSfKGIQ4qvfA0bPSwlMaDPVIszVal9vwtbYTu2lutiQm1gTQ1cHhBRRaVJEp00GiqIAqqPgBJxf4TOIqBKPObfR+Z9MvJR5zb6PzPplHWP00uH5IsaJ85cfRlWkkkaSSfKs2BERBJhR5K9VfCHihyV6q+E9aSQQJy066ztZxd7Mp6CD2GdlTcMAym6naCNxE3tTusZrwM7Tlvi/EyiImzQoVEREUFRERFBUpMumsXtR0rFPvaNz/w7pwNDMusnoJViHwhp6whSBURKrOthzEab2P8AmM+sxedxnKKovfupm2mgSlOUlayVezg1ur4+dHik18yyNm5isPUoMamnTwlOtSwqohWoqVTcmo1yG2C2wCRY3NjF1qmKVqoGGxtWlVxFMIxrOqAAKKl7LyRttPqUTrbTrX+FnX13+Jz+3zvXttLlnXDDH3TcfLfZrGnFDEVK7Oq4itXTSD61EdSmrUk6KhQdlgJq1c0ceaFPDekWpU8PUwgp6FUUirG6vohwDU5ttxbmn1y8XhW01/oLV81/7S5ffr1wR85ytkHEYqng6VSz08NVo1KiVE1iVVWkUZNE7Nt+eZ4vJeIRKHolJaZwtVq1CiqilQbSVlqUyFWy6QdjcDf+c+h3i85vy3e8Tz/anVPbS3HzDLOUcZWVMNVo1sPSxVUYZ3rlGWppAsadLVMbswBAZrD8TYTHH5s416zuKgWnUxeGx9RWRzVL0LCyte1rL0dE+i5WybTxVFqFZSabaJ2EqysraSsrDarAgEETcvJ2jS/pXLwz8Dv9seCtZJeNfVt9iWOHi6/KTmfiDSpUmdrU1ygmxW2DGX5P4aW3pm7kPI2NoVTVdwzDC0MGNXTenZKROiTdjc7Z9Ji8O1m8fT71Inq2ck07aXLNvd2rH0WCSXlPcL77C/42nsRPKhqiIiTQmoiIigqJR5zb6PzPpl5KDOKoC6KDcqGLfC9rD9JQ1k6aNKv29V/G/gWNE+auPoVySSYJM58szYEREEmFDkr1V8JkZjQ5K9VfCZyWQiF1mILDksw/AkeEnImJWSnTANEGsfiN3j5xrH4jd5vOTaEaE72ss+ZzdRDrH4jd5vONY/EbvN5ybQjQjazz5i6siHWPxG7zecax+I3ebzk2hGhG1nnzF1ZEOsfiN3m841j8Ru83nJtCNCNrPPmLqyIdY/EbvN5xrH4jd5vOTaEaEbWefMXVkQ6x+I3ebzjWPxG7zecm0I0I2s8+YurIh1j8Ru83nGsfiN3m85NoRoRtZ58xdWRDrH4jd5vONY/EbvN5ybQjQjazz5i6siHWPxG7zecax+I3ebzk2hGhG1nnzF1ZEOsfiN3m841j8Ru83nJtCNCNrPPmLqyIdY/EbvN5xrH4jd5vOTaEaEbWefMXVkQ6x+I3ebzjWPxH7x85NoRoRtZZ8xdRgtV/fbvHzhFkgWZATmUm8SUkjwCZRE4OhERAMKHJXqr4TOIkshCIiQSIiJIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQAIiJAEREAREQD/9k="
            container.innerHTML=null
            container.append(img)
        }
        else{
            adddata(data)
        }
        

        console.log(data)
    }
    catch(err)
    {
        console.log(err)
        


    }

}

    function adddata(data)
    {
       
       
        container.innerHTML=null
        
        let image= document.createElement("img")
        image.src=data.Poster;
        

        console.log(data.Poster)

        let head= document.createElement("h1")
        head.innerText="Title of Movies : "+data.Title;

        

        

        let para= document.createElement("p")
        para.innerText="Year: "+data.Year

        let p2= document.createElement("p")
        p2.innerText="Released: "+data.Released

        let p4= document.createElement("p")
        p4.innerText="imdbRating  "+data.imdbRating

        let p5= document.createElement("p")
        p5.innerText="imdbRating: "+data.imdbVotes

        let p6= document.createElement("p")
        p6.innerText="Country: "+data.Country

        let p7= document.createElement("p")
        p7.innerText="Genre: "+data.Genre

        let p8= document.createElement("p")
        p8.innerText="Language: "+data.Language
        container.append(image,head,para,p2,p4,p5,p6,p7,p8)
         
    }


