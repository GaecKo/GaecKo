* <h1 align=center> >>👋Hey, I am <ins>Arthur</ins> 👩🏼‍🚀

![GaecKo](gaeckoV.gif)
</h1>

- **Computer Science** student undergraduate at [Louvain School of Engineering](https://uclouvain.be/en/faculties/epl)
- Passionate about **Software Engineering**, **Logic of programs**, **Discrete Mathematics**, and **Advanced Computer theories**.

## <span style="background-image: linear-gradient(to right, #F121cc, #8A2387cc); border-radius: 6px; padding: 0.2px 2px;"><ins>Personal Projects</ins></span>  💻
- [MDPSaver](https://github.com/GaecKo/MDPSaver)
  - **Terminal-based** program for local **password management**. Features password *filter search*, *password generator*, and uses *hashing* and *encryption* for security.
  - **Roadmap**: `▰▰▰▰▰▰▰▰▰▰ 100%`
  - GUI: *wip*
- [TDQuicker](https://github.com/GaecKo/TDQuicker)
  - **Note-taking** app with **pin-on-screen** function, **progress bar**, and basic note-taking app functions.
  - Utilized `PySide6` and the power of inheritance.
  - **Roadmap**: `▰▰▰▰▰▰▰▰▰▰ 100%`
- [FluidStat](https://github.com/GaecKo/FluidStat)
  - Simple resources displayer built in the terminal.
  - Displays CPU load, RAM usage, and battery percentage.
  - **Roadmap**: `▰▰▰▱▱▱▱▱▱▱ 30%`
- Many school projects, including:
  - [C-Multi-Threading](https://github.com/GaecKo/C-Multi-Threading): Implementation of mutex, semaphores; applied them to famous problems like the Philosophers' problem, Lecter-Writer, and Producer-Consumer.
  - [C-Memory-Manager](https://github.com/GaecKo/C-Memory-Manager): Implementation of malloc and free with a fragmentation visualizer.
  - [Twit-Oz](https://github.com/GaecKo/Twit-Oz): Uses `n-grams` to predict the next word in a sequence of words with a Chat-GPT-like interface.
  - **PacMoz**: A PacMan game created using Oz and `functional programming`.
  - **LocaWeb**: A fully working website using `NodeJS`. The website allows you to rent and lease goods, add comments, and report users. It features a fully working moderation model with specific pages to moderate different ads.

## <span style="background-image: linear-gradient(to right, #F121cc, #8A2387cc); border-radius: 6px; padding: 0.2px 2px;"><ins>Things I am currently doing</ins></span> ⏰
- **University**
- Ongoing development on multiple school and personal projects
- Personally following **training** on JS, HTML/CSS, Advanced Python, Python QT, Java, C, ...

## <span style="background-image: linear-gradient(to right, #F121cc, #8A2387cc); border-radius: 6px; padding: 0.2px 2px;"><ins>Coding Languages</ins></span> 
<h1 align=center>

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=GaecKo&theme=dracula&&count_private=true)](https://github.com/anuraghazra/github-readme-stats)

</h1>

## For the beauty of it, here is a lazy Quicksort in `mOZart`. 🥰

```oz
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
{Browse X}      % >> _  ~> I am lazy      
{Browse X.1}    % >> 1  ~> Ok but then just one  
```



