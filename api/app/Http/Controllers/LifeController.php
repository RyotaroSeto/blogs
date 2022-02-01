<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Life;
use Illuminate\Support\Facades\DB;

class LifeController extends Controller
{
    private array $returnArr = array();

	public function index() 
    {
        $this->returnArr["life"] = DB::table("life")->orderBy('id')->get();
        foreach ($this->returnArr["life"] as $key => $life) {
            $this->returnArr["life"][$key]->updated_at = date('Y年n月j日', strtotime($life->updated_at));
        }

        $this->returnArr["count"]["count"] = DB::table("life")->get()->count();
        $this->returnArr["count"]["finishCount"] = DB::table("life")->where('result', '!=', '')->get()->count();
        $this->returnArr["count"]["countPercent"] = floor($this->returnArr["count"]["finishCount"]/$this->returnArr["count"]["count"] * 100);
        return response()->json($this->returnArr);
	}

	public function insert(Request $request): void
    {
        $plan = $request->plan;
        $result = $request->result;
        if ($plan === null) $plan = "";
        if ($result === null) $result = "";
        Life::create(['plan' => $plan,'result' => $result,]);
	}

	public function getTargetLife(Request $request): object
    {
        $id = $request->id;
        return response()->json(DB::table("life")->where('id', $id)->first());
	}

	public function edit(Request $request)
    {
        $id = $request->id;
        $plan = $request->plan;
        $result = $request->result;
        if ($result === null) $result = "";
        Life::where('id', $id)->update(['plan' => $plan, 'result' => $result]);
	}
}
