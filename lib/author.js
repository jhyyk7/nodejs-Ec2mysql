var db = require ('./db');
var template = require ('./template');
var topic = require ('./topic');
var qs = require ('querystring');
var url = require ('url');
var path = require('path');
exports.author_Home = function (request, response) {
    var result = request.authorlist;
    var results = request.topiclist;
    var title = 'author_home';                                     
    var list = template.LIST(results);
    var author_list = template.author_List(result);
    var option = `<a href = "/author/create">create</a>`;
    var html = template.HTML(title, list, author_list, option);                       
    response.send(html)        
},
exports.author_Create=function(request, response){
    var result = request.authorlist;
    var results = request.topiclist;            
    var title = 'author_home';                                     
    var list = template.LIST(results);
    var author_list = template.author_List(result);
    var option = `
    <a href = "/author/create">create</a>
    <form action="/author/create_process" method="post">
        <p><input type="text" name="name" placeholder="name"></p>
        <p>
        <textarea name="profile" placeholder="profile"></textarea>
        </p>
        
        <p>
        <input type="submit">
        </p>
    </form>
    `;
    var html = template.HTML(title, list, author_list, option);                       
    response.send(html)
},
exports.author_Create_process = function(request, response){
    
       
            var post = request.body
            var name = post.name;
            var profile = post.profile;                                 
            db.query(`
                    INSERT INTO author (name, profile) 
                        VALUES(?, ?)`,
                    [name, profile], function (error, results){
                if(error) throw error;
                           
                response.redirect(`/author`)
           });
         
},
exports.author_Update = function (request, response){
    // var _url = request.url;
    // var queryData = url.parse(_url, true).query;
    var pageData = request.params.pageId;
    var filteredPage = path.parse(pageData).base
    var result = request.authorlist;
    var results = request.topiclist;
            db.query(`SELECT * FROM author WHERE name = ?`, [filteredPage], function(error3, result3){
                if (error3) throw error3;
                    var title = 'author_update';
                    var id = result3[0].id;   
                    var name = result3[0].name;
                    var profile = result3[0].profile;                                
                    var list = template.LIST(results);
                    var author_list = template.author_List(result);
                    var option = `
                    
                    <form action="/author/update_process" method="post">
                    <p><input type="hidden" name="id" value ="${id}"></p>
                        <p><input type="text" name="name" placeholder="name" value = "${name}"></p>
                        <p>
                        <textarea name="profile" placeholder="profile">${profile}</textarea>
                        </p>
                        
                        <p>
                        <input type="submit">
                        </p>
                    </form>
                    `;
                    var html = template.HTML(title, list, author_list, option);  
                             
                    
                    response.send(html);
                
             
           });
        
    
    
},
exports.author_Update_process = function (request, response){
    
                var post = request.body;
                var id = post.id;
                var name = post.name;
                var profile = post.profile;
                               
        db.query(`UPDATE author SET name=?, profile=? WHERE id=?`,
                [name, profile, id], function(error, result){
                    if (error) throw error;                       
                    response.writeHead(302, {Location: `/author`});
                    response.end('success');
                    })                
        
},
exports.author_Delete_process = function (request, response){   
      var post = request.body;
      var id = post.id;
      db.query(`DELETE FROM author WHERE id=?`,[id],function(error, result){
        if (error) throw error;       
        response.redirect('/author');
      })
}

