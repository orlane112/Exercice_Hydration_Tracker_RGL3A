package com.example.hydrationtracker.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = TurquoisePrimary,
    onPrimary = DeepDarkBackground,
    primaryContainer = DeepDarkBackground,
    onPrimaryContainer = TurquoisePrimary,
    secondary = TurquoiseSecondary,
    onSecondary = DeepDarkBackground,
    background = DeepDarkBackground,
    onBackground = Color(0xFFE3E3E3),
    surface = DarkSurface,
    onSurface = Color(0xFFE3E3E3),
    outline = Color(0xFF70787C)
)

@Composable
fun HydrationTrackerTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = DarkColorScheme,
        typography = Typography,
        content = content
    )
}
