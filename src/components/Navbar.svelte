<script>
	import { Link } from "svelte-routing";
</script>

<nav>
	<ul>
		<li><Link to="/">About</Link></li>
		<li><Link to="/task">Task</Link></li>
		<li><Link to="/solution">Solution</Link></li>
		<li><Link to="/answer">Answer</Link></li>
	</ul>
</nav>

<style>
	nav {
		margin-bottom: 4rem;
	}
</style>