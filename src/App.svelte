<script>
	import { Router, Link, Route } from "svelte-routing";

	// Import components
	import Navbar from "./components/Navbar.svelte"
	import About from "./components/About.svelte"
	import Task from "./components/Task.svelte"
	import Solution from "./components/Solution.svelte"
	import Answer from "./components/Answer.svelte"
	import Footer from "./components/Footer.svelte"

</script>

<main>
	<Router>
		<Navbar />
		<Route exact path="/"><About /></Route>
		<Route path="/task"><Task /></Route>
		<Route path="/solution"><Solution /></Route>
		<Route path="/answer"><Answer /></Route>
		<Footer />
	</Router>
</main>

<style>

</style>