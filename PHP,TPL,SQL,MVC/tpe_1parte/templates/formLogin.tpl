{include file ="header.tpl"}

<form class="row g-4" action ='verifyLogin' method="POST">
    <div class="col-auto">
        <input type="text" name = "username" palceholder="Username" class="form-control" required>
    </div>
    <div class="col-auto">
        <label for="password" class="visually-hidden">Password</label>
        <input type="password" name = "password" placeholder = "Password" class="form-control"  required>
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Login</button>
    </div>
    <div class="col-auto">
        <a class="btn btn-primary" href = "cars">Login as a guest</a>
    </div>

</form>

{include file = "foother.tpl"}