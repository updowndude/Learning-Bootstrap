<?php
  require_once('../model/db.php');

  $action = $_POST['action'];

  if($action == 'done') {
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $fav = $_POST['fav'];
    $message = $_POST['message'];

    if(isset($_POST['quality'])) {
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
      $checkboxs = filter_input(INPUT_POST, 'checkboxs',
            FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
      $cnt = 0;

      $query = 'INSERT INTO info (fname, lname, favorite, message, experience)
      VALUES (:fname, :lname, :fav, :messag, :qual)';
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fName);
      $statement->bindValue(':lname', $lName);
      $statement->bindValue(':fav', $fav);
      $statement->bindValue(':messag', $message);
      $statement->bindValue(':qual', $quality);
      $statement->execute();

      $query = 'SELECT *
            from info
            ORDER by info_id desc
            LIMIT 1';
      $statement = $db->prepare($query);
      $statement->execute();
      $newFeedback = $statement -> fetch();

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

    } else if (isset($_POST['checkboxs'])) {
      $checkboxs = filter_input(INPUT_POST, 'checkboxs',
            FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
      $cnt = 0;

      $query = 'INSERT INTO info (fname, lname, favorite, message)
      VALUES (:fname, :lname, :fav, :messag)';
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fName);
      $statement->bindValue(':lname', $lName);
      $statement->bindValue(':fav', $fav);
      $statement->bindValue(':messag', $message);
      $statement->execute();

      $query = 'SELECT *
            from info
            ORDER by info_id desc
            LIMIT 1';
      $statement = $db->prepare($query);
      $statement->execute();
      $newFeedback = $statement -> fetch();

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

    header('Location: ../view/landpage.php');
  }
?>
