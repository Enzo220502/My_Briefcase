<?php 
    
    require_once "./app/models/users.model.php";
    require_once "./app/views/auth.view.php";
    
    
    class authController{
        private $view;
        private $model;
        private $helper;
        
        public function __construct() {
            $this->model = new usersModel();
            $this->view = new authView();
            $this->helper = new authHelper();
        }
    
        public function showFormLogin() {
            $this->view->showFormLogin();
        }
    
        public function verifyLogin() {
            $username = $_POST['username'];
            $password = $_POST['password'];

            $user_db = $this->model->getUserByUsername($username);

            if (!empty($user_db) && password_verify($password, $user_db->password)) {
                $this->helper->logUser($user_db);
                header('Location: cars');       
            } else {
                $_SESSION['IS_LOGGED'] = "false";
                $this->view->showFormLogin("El usuario o la contraseña no existe,intentelo nuevamente o ingrese como invitado.");
                return;
            } 
        }
    
        public function logout() {
            session_start();
            session_destroy();
            header("Location: " . BASE_URL);
        }


    }


?>