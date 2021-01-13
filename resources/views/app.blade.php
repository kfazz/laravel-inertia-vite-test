<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>

				{{-- If development --}}
				<script type="module" src="https://localhost:3000/@vite/client"></script>
				<script type="module" src="https://localhost:3000/resources/scripts/main.ts"></script>
    </head>
		<body>
			@inertia
		</body>
</html>
