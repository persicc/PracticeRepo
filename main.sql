create table users {
    userId int not null;
    user_name varchar(250) not null;
    user_email varchar(250) not null;
}

create files {
    fileId int not null;
    user_id int not null;
    file_name varchar(250) not null;
}

create messages{
    messageId int not null; 
    collectionId int not null; 
    messaget_text varchar(255) not null; 
}


/** Show messages **/

SELECT * FROM messages
WHERE collectionId == 100


