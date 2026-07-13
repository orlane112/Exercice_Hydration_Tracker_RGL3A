package com.example.hydrationtracker.ui

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import java.util.UUID

data class WaterLog(
    val id: String = UUID.randomUUID().toString(),
    val amountMl: Int,
    val timestamp: Long = System.currentTimeMillis()
)

data class HydrationUiState(
    val currentAmountMl: Int = 0,
    val goalAmountMl: Int = 2000,
    val logs: List<WaterLog> = emptyList()
)

class WaterViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(HydrationUiState())
    val uiState: StateFlow<HydrationUiState> = _uiState.asStateFlow()

    fun addWater(amountMl: Int) {
        _uiState.update { currentState ->
            val newAmount = (currentState.currentAmountMl + amountMl).coerceAtMost(5000)
            val newLog = WaterLog(amountMl = amountMl)
            currentState.copy(
                currentAmountMl = newAmount,
                logs = listOf(newLog) + currentState.logs
            )
        }
    }

    fun resetWater() {
        _uiState.update { currentState ->
            currentState.copy(
                currentAmountMl = 0,
                logs = emptyList()
            )
        }
    }

    fun updateGoal(newGoalMl: Int) {
        if (newGoalMl in 500..10000) {
            _uiState.update { currentState ->
                currentState.copy(goalAmountMl = newGoalMl)
            }
        }
    }
}
