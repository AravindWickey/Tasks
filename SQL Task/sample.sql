SELECT * FROM `user`;
DROP DATABASE integra;
DROP TABLE `user`;

CREATE TABLE users (
     `id` INT primary key,
     `user_name` VARCHAR(255),
     `phone_number` BIGINT,
	 `points` INT
     );
     
INSERT INTO users(id,user_name, phone_number, points) VALUES (11,'user_ten', 9000000010, 100);

/*below line is contain all the Queries that on Assignment*/

SELECT  id, user_name, phone_number, points AS user_points FROM users WHERE points  BETWEEN 35 AND 70 
		OR user_name = 'user_ten' OR user_name like '%one' or phone_number IN (9000000007)  AND points LIMIT 10 ; 
        
/*below line query is for DISTINCT */        
select distinct points from users;

