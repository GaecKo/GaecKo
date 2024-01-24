declare 
fun {Interact S}
	case S 
		of 'hello' then 
			'<Hey! I am GaecKo_>'
	end
end

{Browse {Interact 'hello'}}
	
declare 
proc {Partition L X L1 L2}
	case L 
		of H|T then
			if H<X then 
				M1 in
					L1=H|M1 
					{Partition T X M1 L2}
			else /* H≥X */ 
				M2 in
					L2=H|M2 {Partition T X L1 M2}
			end
		[] nil then 
			L1=nil 
			L2=nil
	end
end

declare
fun lazy {LAppend L1 L2}
  case L1 
    of H|T then 
      H|{LAppend T L2}
    [] nil then 
      L2 
  end
end

declare
fun lazy {LQuicksort L}
  case L 
    of X|M then 
      L1 L2 S1 S2 in
        {Partition M X L1 L2}
        S1={LQuicksort L1}
        S2={LQuicksort L2}
        {LAppend S1 X|S2}
    [] nil then 
      nil
  end
end

declare X in 
X = {LQuicksort 2|3|1|5|7|nil}
{Browse X}      % >> _   ~> I am lazy 
{Browse X.1}    % >> 1   ~> Ok but just the first one then