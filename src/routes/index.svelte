<script>
    import Container from "../components/container.svelte";
    import Left from "../components/left.svelte";
    import Right from "../components/right.svelte";
    import LeftTitle from "../components/left-title.svelte";
    import ProjectCard from "../components/project-card.svelte";
    import Continue from "../components/continue.svelte";
    import Track from "../components/track.svelte";
    import Skill from "../components/skill.svelte";
    import SkillCard from "../components/skill-card.svelte";

    const goto = (link) => {
        document.querySelector(link.detail).scrollIntoView({
            behavior: 'smooth'
        })
    }

</script>
<svelte:head>
    <title>Home | Fikrun Amin</title>
</svelte:head>
<Container>
    <Left>
        <div class="flex flex-col">
            <img src="https://imgur.com/JHIWogw.jpg" alt="Profile Picture" class="w-44 rounded-full mb-3">
            <p class="text-center"><small><i>Patung Lapangan Banteng,<br>Jakarta, 2018.</i></small></p>
        </div>
    </Left>
    <Right>
        <div class="w-full">
            <h3 class="text-lg font-medium">MUHAMMAD</h3>
            <h1 class="text-5xl font-bold mb-3">FIKRUN AMIN</h1>
            <small>Freelancer | Fullstack Web Developer | Computer Science Student <a href="https://www.utem.edu.my/" class="hover:underline">@UTeM</a></small><br>
        </div>
        <div class="w-full">
            <a href="mailto:fikrun65@gmail.com" target="_blank" class="hover:underline">Email</a> &middot;
            <a href="https://www.facebook.com/fikrun.amin/" target="_blank" class="hover:underline">Facebook</a> &middot;
            <a href="https://www.instagram.com/fikrun.amin/" target="_blank" class="hover:underline">Instagram</a> &middot;
            <a href="https://github.com/fikrunamin" target="_blank" class="hover:underline">GitHub</a> &middot;
            <a href="https://www.linkedin.com/in/fikrun-amin-m-399a08132/" target="_blank" class="hover:underline">LinkedIn</a>
        </div>
        <Continue link="#education" on:goto={goto}/>
    </Right>
</Container>
<Container>
    <Left>
        <LeftTitle title="&#127891; Educations" id="education"/>
    </Left>
    <Right>
        <div class="grid grid-cols-1 gap-y-10 w-full">
            <div>
                <h3 class="text-sm">Universiti Teknikal Malaysia Melaka</h3>
                <p class="text-lg font-semibold mb-1">Bachelor of Computer Science (Artificial Intelligence)</p>
                <small>2018 - Present</small>
            </div>
            <div>
                <h3 class="text-sm">SMA IT Wahdah Islamiyah Makassar</h3>
                <p class="text-lg font-semibold mb-1">Science Major (IPA)</p>
                <small>2015 - 2018</small>
            </div>
        </div>
        <Continue link="#experience" on:goto={goto}/>
    </Right>
</Container>
<Container>
    <Left>
        <LeftTitle title="&#128188; Experiences" id="experience"/>
    </Left>
    <Right>
        <div class="grid grid-cols-1 gap-y-8 w-full">
            <Track target="#experiences"/>
            <div id="experiences" class="flex overflow-hidden">
                <ProjectCard
                    period="2021"
                    title="Public Health Center Information System (SISFO Puskesmas)"
                    description="PHP, MySQL, JQuery, Bootstrap"
                    image="projects/sisfo.png"
                />
                <ProjectCard
                    period="2021"
                    title="Fikrun Amin's Portfolio"
                    description="NodeJS, Svelte, Tailwind"
                    image="projects/portfolio.png"
                />
                <ProjectCard
                    period="2021"
                    title="LMS Moodle"
                    description="Moodle"
                    image="projects/lms.png"
                    link="https://kuliahjafar.my.id/"
                />
            </div>
        </div>
        <Continue link="#exploration" on:goto={goto}/>
    </Right>
</Container>
<Container>
    <Left>
        <LeftTitle title="&#128640; Explorations" id="exploration"/>
    </Left>
    <Right>
        <div class="grid grid-cols-1 gap-y-8 w-full">
            <Track target="#explorations"/>
            <div id="explorations" class="flex overflow-hidden">
                <ProjectCard
                    period="2021"
                    title="Web Buku"
                    description="Codeigniter 4, MySQL, JQuery, Tailwind"
                    image="experiments/buku.png"
                    source="https://github.com/fikrunamin/web-buku"
                />
                <ProjectCard
                    period="2021"
                    title="Fikrun Amin's Portfolio"
                    description="NodeJS, Svelte, Tailwind"
                    image="projects/portfolio.png"
                    source="https://github.com/fikrunamin/portfolio"
                />
                <ProjectCard
                    period="2021"
                    title="NLP Covid Chatbot"
                    description="Flask, Tensorflow, Tailwind"
                    image="experiments/nlp.png"
                    source="https://github.com/fikrunamin/nlp-chatbot"
                />
                <ProjectCard
                    period="2021"
                    title="Dental & Mouth Medical Chatbot"
                    description="Flask, Tensorflow, Codeigniter 4, JQuery, Tailwind"
                    image="experiments/ws2.png"
                    source="https://github.com/fikrunamin/nlp-module-workshop-2"
                />
                <ProjectCard
                    period="2021"
                    title="Expert System in Diagnosis Dental and Mouth Disease"
                    description="PHP, MySQL, Javascript, Bootstrap"
                    image="experiments/kbs.png"
                    source="https://github.com/fikrunamin/expert-system-in-diagnosis-dental-and-mouth-disease"
                />
                <ProjectCard
                    period="2021"
                    title="Web Sekolah"
                    description="Laravel 8, MySQL, JQuery, Tailwind"
                    image="experiments/sekolah.png"
                    source="https://github.com/fikrunamin/pelatihan-clevio-tugas-checkpoint-3"
                />
                <ProjectCard
                    period="2021"
                    title="Fitness Management System"
                    description="Codeigniter 4, MySQL, JQuery, Tailwind"
                    image="experiments/fitness.png"
                    source="https://github.com/fikrunamin/fitness-management-system"
                />
                <ProjectCard
                    period="2020"
                    title="PC Parts Recommendation Based on Budget Given Using Genetic Algorithm"
                    description="C++"
                    image="experiments/ga.jpg"
                    source="https://github.com/fikrunamin/pc-builder-genetic-algorithm"
                />
            </div>
        </div>
        <Continue link="#skill" on:goto={goto}/>
    </Right>
</Container>
<Container>
    <Left>
        <LeftTitle title="&#128187; Skills" id="skill"/>
    </Left>
    <Right>
        <div class="grid grid-cols-1 gap-y-8 w-full">
            <Track target="#skills" title="pages"/>
            <div id="skills" class="flex overflow-hidden">
                <Skill title="Programming, Scripting, & Markup Languages">
                    <SkillCard name="PHP" icon="devicon-php-plain colored"/>
                    <SkillCard name="Javascript" icon="devicon-javascript-plain colored"/>
                    <SkillCard name="CSS" icon="devicon-css3-plain colored"/>
                    <SkillCard name="HTML" icon="devicon-html5-plain colored"/>
                    <SkillCard name="Python" icon="devicon-python-plain colored"/>
                    <SkillCard name="**Dart" icon="devicon-dart-plain colored"/>
                    <SkillCard name="C++" icon="devicon-cplusplus-plain colored"/>
                    <SkillCard name="**Java" icon="devicon-java-plain colored"/>
                    <SkillCard name="**R" icon="devicon-rstudio-plain colored"/>
                    <SkillCard name="**Matlab" icon="devicon-matlab-plain colored"/>
                </Skill>
                <Skill title="Frameworks & Library">
                    <SkillCard name="Laravel (PHP)" icon="devicon-laravel-plain colored"/>
                    <SkillCard name="Codeigniter 4 (PHP)" icon="devicon-codeigniter-plain colored"/>
                    <SkillCard name="JQuery (JS)" icon="devicon-jquery-plain colored"/>
                    <SkillCard name="Vue 3 (JS)" icon="devicon-vuejs-plain colored"/>
                    <SkillCard name="Nuxtjs (JS)" icon="devicon-nuxtjs-plain colored"/>
                    <SkillCard name="Alpine JS (JS)" icon="devicon-javascript-plain colored"/>
                    <SkillCard name="Svelte (JS)" icon="devicon-svelte-plain colored"/>
                    <SkillCard name="SvelteKit (JS)" icon="devicon-svelte-plain colored"/>
                    <SkillCard name="Bootstrap (CSS)" icon="devicon-bootstrap-plain colored"/>
                    <SkillCard name="Tailwind (CSS)" icon="devicon-tailwindcss-plain colored"/>
                    <SkillCard name="Flask (Python)" icon="devicon-flask-plain"/>
                    <SkillCard name="Flutter (Dart)" icon="devicon-flutter-plain colored"/>
                </Skill>
                <Skill title="Databases, Development & Control System Tools">
                    <SkillCard name="MySQL" icon="devicon-mysql-plain colored"/>
                    <SkillCard name="**SQLite" icon="devicon-mysql-plain colored"/>
                    <SkillCard name="**Firebase" icon="devicon-firebase-plain colored"/>
                    <SkillCard name="**MongoDB" icon="devicon-mongodb-plain colored"/>
                    <SkillCard name="**Docker" icon="devicon-docker-plain colored"/>
                    <SkillCard name="Git" icon="devicon-git-plain colored"/>
                    <SkillCard name="GitHub" icon="devicon-github-plain"/>
                    <SkillCard name="Heroku" icon="devicon-heroku-plain colored"/>
                </Skill>
                <Skill title="Miscellaneous">
                    <SkillCard name="Arduino" icon="devicon-arduino-plain colored"/>
                    <SkillCard name="Moodle" icon="devicon-moodle-plain colored"/>
                    <SkillCard name="Googling" icon="devicon-google-plain colored"/>
                </Skill>
            </div>
        </div>
        <Continue link="#certificate" on:goto={goto}/>
    </Right>
</Container>
<Container>
    <Left>
        <LeftTitle title="&#x1f947; Certificates" id="certificate"/>
    </Left>
    <Right>
        <div class="grid grid-cols-1 gap-y-8 w-full">
            <Track target="#certificates" title="certificates"/>
            <div id="certificates" class="flex overflow-hidden">
                <ProjectCard
                    period="2021"
                    title="Becoming Professional Web Developer"
                    description="Clevio Camp"
                    image="certificates/cert1.jpg"
                />
                <ProjectCard
                    period="2019"
                    title="MDEC Intel AI Academy"
                    description="Malaysia Digital Economy Corporation (MDEC)"
                    image="certificates/cert2.jpg"
                />
                <ProjectCard
                    period="2020"
                    title="Interactive Data Visualization with Bokeh"
                    description="DataCamp"
                    image="certificates/cert3.jpg"
                />
                <ProjectCard
                    period="2020"
                    title="Sentiment Analysis"
                    description="DataCamp"
                    image="certificates/cert4.jpg"
                />
            </div>
        </div>
        <Continue link="#contact" on:goto={goto}/>
    </Right>
</Container>
<Container>
    <Left>
        <LeftTitle title="✉ Contact" id="contact"/>
    </Left>
    <Right>
        <div class="grid grid-cols-1 gap-y-4 w-full">
            <div class="w-full">
                <h2 class="">Feel free to contact me on:</h2>
            </div>
            <div class="w-full text-lg font-semibold">
                <a href="mailto:fikrun65@gmail.com" target="_blank" class="hover:underline">Email</a> &middot;
                <a href="https://www.facebook.com/fikrun.amin/" target="_blank" class="hover:underline">Facebook</a> &middot;
                <a href="https://www.instagram.com/fikrun.amin/" target="_blank" class="hover:underline">Instagram</a> &middot;
                <a href="https://github.com/fikrunamin" target="_blank" class="hover:underline">GitHub</a> &middot;
                <a href="https://www.linkedin.com/in/fikrun-amin-m-399a08132/" target="_blank" class="hover:underline">LinkedIn</a>
            </div>
            <div>
                <small>Created with &hearts; by Fikrun Amin. 2021.</small>
            </div>
        </div>
    </Right>
</Container>