-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2021 at 07:13 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


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

CREATE TABLE `tbl_all_users` (
  `User_Id` int(200) NOT NULL,
  `User_Name` text NOT NULL,
  `Email_Address` text NOT NULL,
  `Password` text NOT NULL,
  `Type_Of_Account` varchar(100) NOT NULL,
  `Current_Address` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_all_users`
--

INSERT INTO `tbl_all_users` (`User_Id`, `User_Name`, `Email_Address`, `Password`, `Type_Of_Account`, `Current_Address`) VALUES
(43, 'MahdiMahim', 'mahim@gmail.com', '$2b$10$qyR0NvT6nUSmA.kFeM66seIxheTvRjwGOAKRNlGf7BhBmomtdooFC', 'User', 'Sylhet'),
(44, 'Specialist ', 'sp@gmail.com', '$2b$10$vJOgU8ey55AeJjFCq7Vg9OuOfLQfHYBtnOe6qmJai4jQfZjhaXQ7a', 'Specialist', 'Bangladesh'),
(45, 'admin1', 'admin1@gmail.com', '$2b$10$m7QbpMMAHE5LOg2x5j6bSezWL/cFFtjiRpIDRSZU5PVr7DRSTh2wa', 'Admin', 'Sydney, Australia'),
(46, 'user', 'user1@gmail.com', '$2b$10$uRzbWT82fMZnmciJ2YYBBep7pVM3.3HkHsfISHjCsMAR0OjAQkVsq', 'User', 'Dhaka'),
(47, 'user2', 'user2@gmail.com', '$2b$10$/rgPuaJOVzkPKvLKQ5iF..KtpjXtSvHM1aPchZeh5Ib610yBIEywy', 'User', 'Dhaka'),
(48, 'user3', 'user3@gmail.com', '$2b$10$7O5WLStzMvUCNQle3sn1eeaIr7c0lI7PtoN08T6WqdwD4uDFFF6I2', 'User', 'Dhaka'),
(49, 'specialist1', 'specialist1@gmail.com', '$2b$10$68A.Xw785DP4GOna0joT0.HDu9n91XOQ7pnObiBhur6sOc0uPpYJO', 'User', 'Cumilla, Bangladesh'),
(50, 'specialist2', 'specilist2@gmail.com', '$2b$10$IubRWWD1I7OuqHFDwQifse4GExjnaU7i6SRn3NQs.Ls/wFJos7NdC', 'Specialist', 'Cumilla, Bangladesh'),
(51, 'SP Kazi', 'kazi@gmail.com', '$2b$10$VOGjLKPxOZbBqN2Vyn4FDecquBZqjjK6BN.EXuBLVhcc3H/EO/ndq', 'Specialist', 'Sylhet, Bangladesh');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_answer_bank`
--

CREATE TABLE `tbl_answer_bank` (
  `Answer_Id` int(150) NOT NULL,
  `Question_Id` int(150) NOT NULL,
  `Specialist_Name` text NOT NULL,
  `Answer` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_answer_bank`
--

INSERT INTO `tbl_answer_bank` (`Answer_Id`, `Question_Id`, `Specialist_Name`, `Answer`) VALUES
(31, 9, 'specialist2', 'A black spot is a place on a road where accidents often happen. [British] The accident happened on a notorious black spot on the A43.'),
(32, 9, 'SP Kazi', 'Black spot (blackspot) is the most important fungal disease of roses worldwide. The initial symptoms start as feathery-edged, black spots on lower leaves.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_loan`
--

CREATE TABLE `tbl_loan` (
  `Loan_No` int(150) NOT NULL,
  `User_Id` int(200) NOT NULL,
  `User_Name` text NOT NULL,
  `Loan_Amount` text NOT NULL,
  `Postal_Code` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_loan`
--

INSERT INTO `tbl_loan` (`Loan_No`, `User_Id`, `User_Name`, `Loan_Amount`, `Postal_Code`) VALUES
(13, 48, 'user3', '$10,001 - $50,000', 3100);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_plant_aider`
--

CREATE TABLE `tbl_plant_aider` (
  `Problem_Id` int(150) NOT NULL,
  `Problem_Name` varchar(255) DEFAULT NULL,
  `Problem` text NOT NULL,
  `Symptom` text NOT NULL,
  `Solution` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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

CREATE TABLE `tbl_question_bank` (
  `Question_Id` int(255) NOT NULL,
  `User_Id` int(255) NOT NULL,
  `Question_Date` date NOT NULL,
  `Question` text NOT NULL,
  `Question_Topic` varchar(100) NOT NULL,
  `Approval_Status` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_question_bank`
--

INSERT INTO `tbl_question_bank` (`Question_Id`, `User_Id`, `Question_Date`, `Question`, `Question_Topic`, `Approval_Status`) VALUES
(8, 43, '2021-11-07', 'What are good items to buy for a rooftop garden?', 'Plants and Crops', 'Yes'),
(9, 47, '2021-11-29', 'What is Black spot?', 'Plant Disease', 'Yes'),
(10, 48, '2021-12-01', 'what Powdery Mildew? ', 'Plant Nutrition', 'Yes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_all_users`
--
ALTER TABLE `tbl_all_users`
  ADD PRIMARY KEY (`User_Id`);

--
-- Indexes for table `tbl_answer_bank`
--
ALTER TABLE `tbl_answer_bank`
  ADD PRIMARY KEY (`Answer_Id`);

--
-- Indexes for table `tbl_loan`
--
ALTER TABLE `tbl_loan`
  ADD PRIMARY KEY (`Loan_No`);

--
-- Indexes for table `tbl_plant_aider`
--
ALTER TABLE `tbl_plant_aider`
  ADD PRIMARY KEY (`Problem_Id`);

--
-- Indexes for table `tbl_question_bank`
--
ALTER TABLE `tbl_question_bank`
  ADD PRIMARY KEY (`Question_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_all_users`
--
ALTER TABLE `tbl_all_users`
  MODIFY `User_Id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `tbl_answer_bank`
--
ALTER TABLE `tbl_answer_bank`
  MODIFY `Answer_Id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_loan`
--
ALTER TABLE `tbl_loan`
  MODIFY `Loan_No` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_plant_aider`
--
ALTER TABLE `tbl_plant_aider`
  MODIFY `Problem_Id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_question_bank`
--
ALTER TABLE `tbl_question_bank`
  MODIFY `Question_Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
