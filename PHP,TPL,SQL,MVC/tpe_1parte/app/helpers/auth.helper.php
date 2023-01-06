<?php

    class authHelper {

        public function logUser($user_db){
            session_start();
            $_SESSION['USER_ID'] = $user_db->id;
            $_SESSION['USER_USERNAME'] = $user_db->username;
            $_SESSION['IS_LOGGED'] = "true";
        }
        public function checkLoggedIn() {
            session_start();
            if (!isset($_SESSION['IS_LOGGED'])) {
                header("Location: " . BASE_URL . 'login');
                die();
            }
    } 
}