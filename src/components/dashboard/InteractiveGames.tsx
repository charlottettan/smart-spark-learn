
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad, CloudRain, Calculator } from "lucide-react";

type GameType = "waterCycle" | "mathMaze";

interface WaterCycleState {
  drops: number[];
  score: number;
  isComplete: boolean;
}

interface MathMazeState {
  currentNumber: number;
  target: number;
  moves: number;
  isComplete: boolean;
}

interface InteractiveGamesProps {
  language: string;
}

const translations = {
  en: {
    title: "Interactive Learning Games",
    waterCycle: "Water Cycle Adventure",
    mathMaze: "Math Maze Challenge",
    score: "Score",
    moves: "Moves",
    playAgain: "Play Again",
    complete: "Game Complete!",
    dropCloud: "Click to make it rain!",
    mathTarget: "Reach the target number:",
  },
  es: {
    title: "Juegos Interactivos de Aprendizaje",
    waterCycle: "Aventura del Ciclo del Agua",
    mathMaze: "Desafío del Laberinto Matemático",
    score: "Puntuación",
    moves: "Movimientos",
    playAgain: "Jugar de Nuevo",
    complete: "¡Juego Completado!",
    dropCloud: "¡Haz clic para que llueva!",
    mathTarget: "Alcanza el número objetivo:",
  },
  fr: {
    title: "Jeux d'Apprentissage Interactifs",
    waterCycle: "Aventure du Cycle de l'Eau",
    mathMaze: "Défi du Labyrinthe Mathématique",
    score: "Score",
    moves: "Coups",
    playAgain: "Rejouer",
    complete: "Jeu Terminé!",
    dropCloud: "Cliquez pour faire pleuvoir!",
    mathTarget: "Atteindre le nombre cible:",
  },
};

const InteractiveGames = ({ language }: InteractiveGamesProps) => {
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const [waterCycleState, setWaterCycleState] = useState<WaterCycleState>({
    drops: [],
    score: 0,
    isComplete: false,
  });
  const [mathMazeState, setMathMazeState] = useState<MathMazeState>({
    currentNumber: 5,
    target: 20,
    moves: 0,
    isComplete: false,
  });

  const t = translations[language as keyof typeof translations];

  const handleWaterCycleClick = () => {
    if (waterCycleState.drops.length < 10) {
      const newDrop = Math.floor(Math.random() * 80) + 10; // Random position 10-90
      setWaterCycleState(prev => ({
        ...prev,
        drops: [...prev.drops, newDrop],
        score: prev.score + 1,
        isComplete: prev.drops.length === 9
      }));
    }
  };

  const handleMathOperation = (operation: 'add' | 'multiply') => {
    const newNumber = operation === 'add' 
      ? mathMazeState.currentNumber + 2 
      : mathMazeState.currentNumber * 2;

    setMathMazeState(prev => ({
      ...prev,
      currentNumber: newNumber,
      moves: prev.moves + 1,
      isComplete: newNumber === prev.target
    }));
  };

  const resetGame = (game: GameType) => {
    if (game === 'waterCycle') {
      setWaterCycleState({ drops: [], score: 0, isComplete: false });
    } else {
      setMathMazeState({
        currentNumber: 5,
        target: 20,
        moves: 0,
        isComplete: false
      });
    }
    setSelectedGame(game);
  };

  const renderWaterCycleGame = () => (
    <div className="space-y-4">
      <div className="bg-blue-50 p-6 rounded-lg min-h-[300px] relative">
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
          {t.score}: {waterCycleState.score}
        </div>
        <div 
          className="cursor-pointer w-20 h-20 mx-auto mb-4 transition-transform hover:scale-110"
          onClick={handleWaterCycleClick}
        >
          <CloudRain className="w-full h-full text-blue-500" />
        </div>
        <div className="relative h-40">
          {waterCycleState.drops.map((position, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-fade-in"
              style={{
                left: `${position}%`,
                top: index % 2 === 0 ? '20%' : '60%',
                animation: 'dropFall 2s ease-in infinite'
              }}
            />
          ))}
        </div>
      </div>
      {waterCycleState.isComplete && (
        <div className="text-center">
          <p className="text-xl font-medium mb-2">{t.complete}</p>
          <Button onClick={() => resetGame('waterCycle')}>{t.playAgain}</Button>
        </div>
      )}
    </div>
  );

  const renderMathMazeGame = () => (
    <div className="space-y-4">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <span>{t.moves}: {mathMazeState.moves}</span>
          <span>{t.mathTarget} {mathMazeState.target}</span>
        </div>
        <div className="text-center text-4xl font-bold mb-6">
          {mathMazeState.currentNumber}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => handleMathOperation('add')}
            variant="outline"
            className="h-16"
          >
            +2
          </Button>
          <Button 
            onClick={() => handleMathOperation('multiply')}
            variant="outline"
            className="h-16"
          >
            ×2
          </Button>
        </div>
      </div>
      {mathMazeState.isComplete && (
        <div className="text-center">
          <p className="text-xl font-medium mb-2">{t.complete}</p>
          <Button onClick={() => resetGame('mathMaze')}>{t.playAgain}</Button>
        </div>
      )}
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gamepad className="h-5 w-5" />
          {t.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!selectedGame ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-32 flex flex-col gap-2"
              onClick={() => setSelectedGame('waterCycle')}
            >
              <CloudRain className="h-8 w-8" />
              {t.waterCycle}
            </Button>
            <Button 
              variant="outline" 
              className="h-32 flex flex-col gap-2"
              onClick={() => setSelectedGame('mathMaze')}
            >
              <Calculator className="h-8 w-8" />
              {t.mathMaze}
            </Button>
          </div>
        ) : selectedGame === 'waterCycle' ? (
          renderWaterCycleGame()
        ) : (
          renderMathMazeGame()
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveGames;
