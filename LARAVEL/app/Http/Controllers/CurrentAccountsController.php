<?php

namespace App\Http\Controllers;

use App\CurrentAccount;
use Illuminate\Http\Request;

class CurrentAccountsController extends Controller
{
    public function extrato(Request $request)
    {
        $query = CurrentAccount::query();

        if($request->has('agency') && $request->has('account')){
            $query
                ->where('agency', '=', $request->agency)
                ->where('account', '=', $request->account);
            $currentAccounts = $query->get();//->paginate();
        }
        else{
            $currentAccounts = CurrentAccount::all();
        }

        return response()->json($currentAccounts);
    }
    public function saldo(Request $request)
    {
        $query = CurrentAccount::query();
        if($request->has('agency') && $request->has('account')){
            $sum = $query->where('agency', '=', $request->agency)
                         ->where('account', '=', $request->account)
                         ->sum('balance');
        }

        return response()->json($sum);
    }

    public function depositar(Request $request)
    {
        // var_dump("foi");die;
        $currentAccount = new CurrentAccount();
        $currentAccount->fill($request->all());
        $currentAccount->balance = abs($currentAccount->balance);
        $currentAccount->save();

        return response()->json($currentAccount, 201);
    }

    public function sacar(Request $request)
    {
        $currentAccount = new CurrentAccount();
        $currentAccount->fill($request->all());
        $currentAccount->balance = (abs($currentAccount->balance))*-1;
        $currentAccount->save();

        return response()->json($currentAccount, 201);
    }


}
