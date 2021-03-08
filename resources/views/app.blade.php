<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>

	<!-- @vite -->
	{{-- If development --}}
	<script type="module" src="http://localhost:3000/@vite/client"></script>
	<script type="module" src="http://localhost:3000/resources/scripts/main.js"></script>
</head>

<body>
	@inertia
</body>

</html>