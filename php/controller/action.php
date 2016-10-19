<?php
  // by Correy Winke
  // 10/27/16
  // open up the database
  require_once('../model/db.php');

  // from the form when done
  $action = $_POST['action'];

  // works with other actions
  if($action == 'done') {
    // void some attacks
    // get the right imforation
    $fName = addslashes(htmlspecialchars((string) $_POST['fName']));
    $lName = addslashes(htmlspecialchars((string) $_POST['lName']));
    $fav = $_POST['fav'];
    $message = addslashes(htmlspecialchars((string) $_POST['message']));

    // quality had a value
    if(isset($_POST['quality'])) {
      // adds that to query
      $quality = $_POST['quality'];

      $query = 'INSERT INTO info (fname, lname, favorite, message, experience)
      VALUES (:fname, :lname, :fav, :messag, :qual)';
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fName);
      $statement->bindValue(':lname', $lName);
      $statement->bindValue(':fav', $fav);
      $statement->bindValue(':messag', $message);
      $statement->bindValue(':qual', $quality);
      $statement->execute();
      $statement->closeCursor();

    } else if((isset($_POST['checkboxs'])) && (isset($_POST['quality']))) {
      //adds the checkbos to query
      $checkboxs = filter_input(INPUT_POST, 'checkboxs',
            FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
      $cnt = 0;

      // handles the query
      $query = 'INSERT INTO info (fname, lname, favorite, message, experience)
      VALUES (:fname, :lname, :fav, :messag, :qual)';
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fName);
      $statement->bindValue(':lname', $lName);
      $statement->bindValue(':fav', $fav);
      $statement->bindValue(':messag', $message);
      $statement->bindValue(':qual', $quality);
      $statement->execute();

      // gets the newly added customer
      $query = 'SELECT *
            from info
            ORDER by info_id desc
            LIMIT 1';
      $statement = $db->prepare($query);
      $statement->execute();
      $newFeedback = $statement -> fetch();

      // add the checkboxs to that new imformation
      while ($cnt != count($checkboxs)) {
        $val =  $checkboxs[$cnt];
        $query = 'INSERT INTO checkboxs (name_checkBox, value_checkbox, info_id)
        VALUES (:checked, true, :new)';
        $statement = $db->prepare($query);
        $statement->bindValue(':checked', $val);
        $statement->bindValue(':new', $newFeedback['info_id']);
        $statement->execute();
        $cnt++;
      }

      $statement->closeCursor();

      // only chakbox where entered
    } else if (isset($_POST['checkboxs'])) {
      $checkboxs = filter_input(INPUT_POST, 'checkboxs',
            FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
      $cnt = 0;

      // handles the stander query
      $query = 'INSERT INTO info (fname, lname, favorite, message)
      VALUES (:fname, :lname, :fav, :messag)';
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fName);
      $statement->bindValue(':lname', $lName);
      $statement->bindValue(':fav', $fav);
      $statement->bindValue(':messag', $message);
      $statement->execute();

      // gets the newly added customer
      $query = 'SELECT *
            from info
            ORDER by info_id desc
            LIMIT 1';
      $statement = $db->prepare($query);
      $statement->execute();
      $newFeedback = $statement -> fetch();

      // add the imfromtaion to the new added feedback
      while ($cnt != count($checkboxs)) {
        $val =  $checkboxs[$cnt];
        $query = 'INSERT INTO checkboxs (name_checkBox, value_checkbox, info_id)
        VALUES (:checked, true, :new)';
        $statement = $db->prepare($query);
        $statement->bindValue(':checked', $val);
        $statement->bindValue(':new', $newFeedback['info_id']);
        $statement->execute();
        $cnt++;
      }

      $statement->closeCursor();
    } else {
      // simily adds basic imforation without anything less added
      $query = 'INSERT INTO info (fname, lname, favorite, message)
      VALUES (:fname, :lname, :fav, :messag)';
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fName);
      $statement->bindValue(':lname', $lName);
      $statement->bindValue(':fav', $fav);
      $statement->bindValue(':messag', $message);
      $statement->execute();
      $statement->closeCursor();
    }

  // changes back to the landing page
   header('Location: ../view/landpage.php');
  }
?>
