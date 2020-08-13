<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CurrentAccount extends Model
{
    protected $fillable = ['agency', 'account', 'balance'];
    protected $dates = ['deleted_at'];
}
