<h1 align=center> 👋 Hey, I am <ins>Arthur</ins> 
<p></p>

![GaecKo](gaeckoV.gif)
</h1>

- **Computer Science** master student at [Louvain School of Engineering](https://uclouvain.be/en/faculties/epl)
  - **Cybersecurity** and **Software Engineering** specialization
- Passionate about **Software Engineering**, **Logic of programs**, **Discrete Mathematics**, and **Advanced Computer theories**.

## <span style="background-image: linear-gradient(to right, #F121cc, #8A2387cc); border-radius: 6px; padding: 0.2px 2px;"><ins>Personal Projects</ins></span>  💻
- [MDPSaver](https://github.com/GaecKo/MDPSaver)
  - **Terminal-based** program for local **password management**. Features password *filter search*, *password generator*, and uses *hashing* and *encryption* for security.
  - **Roadmap**: `▰▰▰▰▰▰▰▰▰▰ 100%`

- [CrypedEye](https://github.com/GaecKo/CryptedEye)
  - **Android** app that allows you to manage passwords and notes locally. Features shareable vaults, password generator, ... .
  - Built on `Flutter` and `Dart`.
  - **Roadmap**: `▰▰▰▰▰▰▰▰▱▱ 80%`

- [LocaWeb](https://github.com/GaecKo/LocaWeb)
  - A fully working website using `NodeJS`. The website allows you to rent and lease goods, add comments, and report users.
  - Features a fully working moderation model with specific pages to moderate reported ads and comments.
  - **Roadmap**: `▰▰▰▰▰▰▰▰▰▰ 100%`
  
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
  

## <span style="background-image: linear-gradient(to right, #F121cc, #8A2387cc); border-radius: 6px; padding: 0.2px 2px;"><ins>Things I am currently doing</ins></span> ⏰
- **University**
- Ongoing development on multiple school and personal projects
- Personally following **training** on JS, HTML/CSS, Advanced Python, Python QT, Java, C, ...

<details>
  <summary><b>⚡ Github Stats</b></summary>

  <br />
  <img height="300em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=GaecKo&show_icons=true&hide_border=true&layout=normal&langs_count=6&hide=jupyter%20notebook,html"/>
</details>

<details>
  <summary><b>☄️ Github Streaks</b></summary>

  <br />
  <img height="180em" src="https://github-readme-streak-stats.herokuapp.com/?user=GaecKo&hide_border=true" />
</details>

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
{Browse X}		% >> _	~> I am lazy 
{Browse X.1}	% >> 1	~> Ok but just the first one then
```



