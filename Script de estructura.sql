CREATE TABLE `schedule`(
`id` INT AUTO_INCREMENT,
`days` INT,
`time` INT,
PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `course`(
`id` INT AUTO_INCREMENT,
`name` VARCHAR(30),
`price` INT,
`description` VARCHAR(255),
PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `commission`(
`id` INT AUTO_INCREMENT,
`name` VARCHAR(30),
`courseID` INT,
`scheduleID` INT,
`classroomID` INT,
PRIMARY KEY(`id`),
FOREIGN KEY(`courseID`) REFERENCES course(`id`),
FOREIGN KEY(`scheduleID`) REFERENCES schedule(`id`),
FOREIGN KEY(`classroomID`) REFERENCES classroom(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `role`(
`id` INT AUTO_INCREMENT,
`name` VARCHAR(30),
PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user`(
`id` INT AUTO_INCREMENT,
`first_Name` VARCHAR(30),
`last_Name` VARCHAR(30),
`country` VARCHAR(30),
`email` VARCHAR(30),
`password` VARCHAR(30),
`roleID` INT,
PRIMARY KEY(`id`),
FOREIGN KEY(`roleID`) REFERENCES role(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_commission`(
`id` INT AUTO_INCREMENT,
`userID` INT,
`commissionID` INT,
PRIMARY KEY(`id`),
FOREIGN KEY(`userID`) REFERENCES user(`id`),
FOREIGN KEY(`commissionID`) REFERENCES commission(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Classroom`(
`id` INT AUTO_INCREMENT,
`linkMeeting` VARCHAR(255),
PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `module`(
`id` INT AUTO_INCREMENT,
`name` VARCHAR(30),
`description` VARCHAR(255),
`classes` INT,
`courseID` INT,
PRIMARY KEY(`id`),
FOREIGN KEY(`courseID`) REFERENCES course(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

