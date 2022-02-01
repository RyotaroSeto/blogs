<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Life extends Model
{
	protected $fillable = ['plan', 'result'];

	public function user() {
		return $this->belongsTo(User::class);
	}

	protected $table = 'life';
}
