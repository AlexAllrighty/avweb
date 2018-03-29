<?php
if (!empty($_POST)) {
    mail("lexspb19@yandex.ru", 'Письмо с сайта', '<p><b>Имя:</b> ' . $_POST['name'] . '</p><p><b>E-mail:</b> ' . $_POST['email'] . '</p><p><b>Текст:</b> ' . $_POST['text'] . '</p>');
}
include_once 'index.html';