<script lang="ts">
    let greeting;

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Buenos días ☀️";
        } else if (hour < 18) {
            return "Buenas tardes 🌤️";
        } else {
            return "Buenas noches 🌙";
        }
    };

    greeting = getGreeting();
</script>


<h1 class="text-3xl font-bold">{greeting}</h1>
