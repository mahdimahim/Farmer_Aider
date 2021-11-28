-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 09, 2019 at 08:25 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*! Farmer Aider */;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_farmer_aider_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_all_users`
--

DROP TABLE IF EXISTS `tbl_all_users`;
CREATE TABLE IF NOT EXISTS `tbl_all_users` (
  `User_Id` int(200) NOT NULL AUTO_INCREMENT,
  `User_Name` text NOT NULL,
  `Email_Address` text NOT NULL,
  `Password` text NOT NULL,
  `Type_Of_Account` varchar(100) NOT NULL,
  `Current_Address` text NOT NULL,
  PRIMARY KEY (`User_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;


--
-- Table structure for table `tbl_answer_bank`
--

DROP TABLE IF EXISTS `tbl_answer_bank`;
CREATE TABLE IF NOT EXISTS `tbl_answer_bank` (
  `Answer_Id` int(150) NOT NULL AUTO_INCREMENT,
  `Question_Id` int(150) NOT NULL,
  `Specialist_Name` text NOT NULL,
  `Answer` text NOT NULL,
  PRIMARY KEY (`Answer_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;



--
-- Table structure for table `tbl_loan`
--

DROP TABLE IF EXISTS `tbl_loan`;
CREATE TABLE IF NOT EXISTS `tbl_loan` (
  `Loan_No` int(150) NOT NULL AUTO_INCREMENT,
  `User_Id` int(200) NOT NULL,
  `User_Name` text NOT NULL,
  `Loan_Amount` text NOT NULL,
  `Postal_Code` int(100) NOT NULL,
  PRIMARY KEY (`Loan_No`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;



--
-- Table structure for table `tbl_plant_aider`
--

DROP TABLE IF EXISTS `tbl_plant_aider`;
CREATE TABLE IF NOT EXISTS `tbl_plant_aider` (
  `Problem_Id` int(150) NOT NULL AUTO_INCREMENT,
  `Problem_Name` varchar(255) DEFAULT NULL,
  `Problem` text NOT NULL,
  `Symptom` text NOT NULL,
  `Solution` text NOT NULL,
  PRIMARY KEY (`Problem_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_plant_aider`
--

INSERT INTO `tbl_plant_aider` (`Problem_Id`, `Problem_Name`, `Problem`, `Symptom`, `Solution`) VALUES
(1, 'Calcium Deficiency', 'A Calcium deficiency is relatively rare unless a plant is underwatered or in a really dry environment, and is usually accompanied by other types of nutrient or pH problems that appear as problems with the leaves.\r\nThe first signs of Calcium deficiency are abnormal or thick growth tips along with brown or yellow spotting on new leaves.\r\n\r\nWith a Calcium deficiency, upper leaves display abnormal and/or slowed growth. Growing tips may not grow properly, may display twisted growth, and may die off. New leaves may wrinkle or curl.\r\nPlant roots can also be affected by a Calcium deficiency, showing unhealthy or slow growth. Stems may become rough or hollow.\r\nA plant with a boron deficiency may look like it has a calcium deficiency because boron is needed for the plant to properly use calcium. New growth is affected the most and may look like it’s been burnt or scorched.', 'Bronze or brown patches, Twisted growth, Yellow leaves.', '1.) Use Good Sources of Nutrients.\r\n2.) Adjust pH to Correct Range.\r\n3.) Give Plants Enough Moisture.\r\n4.) Watch Leaves for Recovery'),
(2, 'Root Rot', 'The curled, drooping, unhealthy leaves are the result of the plant not being able to get enough oxygen through the roots. Root rot symptoms often look like a soil plant that has been severely over or under-watered.\r\nAn example of what plants root rot can look like “under the hood”. Every infection looks a little different, but brown roots are usually the main symptom. It may affect all or just parts of the roots, and the sick sections usually become slimy or mushy and start twisting together.\r\nRoot rot can be caused by several different organisms including types of bacteria, fungi, algae and parasitic oomycotes. Although the symptoms are similar between different types, they don’t always look exactly the same. However, growers generally refer to all types of unhealthy root browning as just “root rot.”', 'Bronze or brown patches\r\nBrown or slimy roots\r\nBrown or yellow leaf tips/edges\r\nBuds dying\r\nCurling or clawing leaves\r\nDrooping plant\r\nSpots or markings\r\nTwisted growth\r\nWilting leaves\r\nYellow leaves', '1.) Add Beneficial Root Bacteria – Crucial!\r\n2.) Lots of Bubbles.\r\n3.) No Light Leaks in the Reservoir!\r\n4.) Keep Grow Room Cool.\r\n5.) Avoid Disturbing Roots, Especially Young Plants.\r\n6.) Keep Everything Extremely Clean & Sterile.\r\n'),
(3, 'Copper Deficiency', ' A plants copper deficiency appears with leaf symptoms such as dark leaves that take on blue or even purple undertones. The tips and edges of leaves turn pale yellow or white in stark contrast to the rest of the leaves which have turned dark. In flowering it’s important to correct a plant copper deficiency as soon as possible because buds may stop maturing if the plant isn’t fixed up right away. Copper doesn’t move easily through the plant and is considered “low-mobile” which means the yellowing leaves might not necessarily turn green again, but the problem should stop spreading to new plant leaves.', 'Leaves turn dark with blue or purple undertones\r\nTips and edges of leaves turn bright yellow or white\r\nShiny or metallic sheen on leaves\r\nLeaves may feel stiff and start turning under\r\nTends to affect leaves directly under the light\r\nBuds do not ripen, or grow very slowly', '1.) Adjust pH to Correct Range.\r\n2.) Give the Right Nutrients.\r\n3.) Take Good Care of the Roots.\r\n4.) Watch for Leaf Recovery.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_question_bank`
--

DROP TABLE IF EXISTS `tbl_question_bank`;
CREATE TABLE IF NOT EXISTS `tbl_question_bank` (
  `Question_Id` int(255) NOT NULL AUTO_INCREMENT,
  `User_Id` int(255) NOT NULL,
  `Question_Date` date NOT NULL,
  `Question` text NOT NULL,
  `Question_Topic` varchar(100) NOT NULL,
  `Approval_Status` varchar(100) NOT NULL,
  PRIMARY KEY (`Question_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
