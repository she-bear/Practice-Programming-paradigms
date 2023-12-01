sum_array_elements([],0).
sum_array_elements([H|T], Sum) :-
   sum_array_elements(T, R),
   Sum is H + R.
