"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MessageSquareText,
  MapPin,
  Heart,
  Bookmark,
  Languages,
  Smile,
  Play,
  Mic,
  Volume2,
  Star,
  Globe,
  Zap,
} from "lucide-react"

export default function CityWhisperMVP() {
  const [selectedMood, setSelectedMood] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [currentStory, setCurrentStory] = useState("")
  const [savedMemories, setSavedMemories] = useState<string[]>([])

  const moods = [
    { value: "adventurous", label: "🏔️ Adventurous", color: "bg-orange-100 text-orange-800" },
    { value: "relaxed", label: "🧘 Relaxed", color: "bg-green-100 text-green-800" },
    { value: "romantic", label: "💕 Romantic", color: "bg-pink-100 text-pink-800" },
    { value: "cultural", label: "🎭 Cultural", color: "bg-purple-100 text-purple-800" },
    { value: "foodie", label: "🍜 Foodie", color: "bg-yellow-100 text-yellow-800" },
  ]

  const stories = [
    {
      title: "The Secret Garden of Montmartre",
      location: "Paris, France",
      duration: "8 min",
      language: "French/English",
    },
    {
      title: "Midnight Ramen Chronicles",
      location: "Tokyo, Japan",
      duration: "12 min",
      language: "Japanese/English",
    },
    {
      title: "The Flamenco Dancer's Tale",
      location: "Seville, Spain",
      duration: "15 min",
      language: "Spanish/English",
    },
  ]

  const memories = [
    "Amazing sunset at the Eiffel Tower - felt so peaceful",
    "Discovered a hidden jazz club in New Orleans",
    "Learned to make pasta from a local nonna in Rome",
  ]

  const testimonials = [
    {
      name: "Maria Santos",
      location: "São Paulo, Brazil",
      text: "CityWhisper helped me explore Tokyo without speaking Japanese. The stories made every corner come alive!",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      text: "As someone who travels for work, this made my layovers in foreign cities so much more meaningful.",
      rating: 5,
    },
    {
      name: "Elena Kowalski",
      location: "Warsaw, Poland",
      text: "The mood-based recommendations were perfect. Found the most romantic spots in Paris!",
      rating: 5,
    },
  ]

  const handleCallSimulation = () => {
    alert("📞 Connecting you to CityWhisper... In a real app, this would initiate a Twilio voice call!")
  }

  const handleVoiceNote = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        alert("🎤 Voice note received! CityWhisper is processing your request...")
      }, 3000)
    }
  }

  const generateItinerary = () => {
    if (!selectedMood) {
      alert("Please select your mood first!")
      return
    }

    const itineraries = {
      adventurous: "🏔️ Rock climbing at Central Park → 🚁 Helicopter tour → 🌉 Brooklyn Bridge walk",
      relaxed: "🧘 Spa in Chinatown → ☕ Coffee tasting in SoHo → 🌸 Botanical garden stroll",
      romantic: "💕 Sunset at Top of the Rock → 🍷 Wine bar in West Village → 🌙 Moonlit walk in Central Park",
      cultural: "🎭 Broadway show → 🏛️ Metropolitan Museum → 🎨 Gallery hopping in Chelsea",
      foodie: "🍜 Food tour in Little Italy → 🥯 Bagel making class → 🍰 Dessert crawl in East Village",
    }

    alert(`Your ${selectedMood} itinerary: ${itineraries[selectedMood as keyof typeof itineraries]}`)
  }

  const saveMemory = (memory: string) => {
    setSavedMemories([...savedMemories, memory])
    alert("💾 Memory saved! You can revisit this anytime.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">CityWhisper</h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">Travel without Barriers</p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
              Your AI-powered voice companion for immersive city exploration. No app downloads, no sign-ups, no language
              barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                onClick={handleCallSimulation}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
                onClick={handleVoiceNote}
              >
                <MessageSquareText className="mr-2 h-5 w-5" />
                Send Voice Note
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Speak</h3>
              <p className="text-gray-600">
                Call or send a voice note in any language. Tell us where you are and what you're feeling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Listen</h3>
              <p className="text-gray-600">
                Receive personalized stories, recommendations, and cultural insights in your preferred language.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Explore</h3>
              <p className="text-gray-600">
                Follow your personalized itinerary and discover hidden gems with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Interaction Demo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Try CityWhisper Now</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-orange-600" />
                  Voice Call Simulation
                </CardTitle>
                <CardDescription>Experience how CityWhisper responds to your voice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">You say:</p>
                  <p className="italic">"I'm in Paris near the Louvre and feeling romantic..."</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">CityWhisper responds:</p>
                  <p className="italic">
                    "Ah, perfect! Let me tell you about the secret love locks bridge just 5 minutes away, and then guide
                    you to the most romantic café where Hemingway used to write..."
                  </p>
                </div>
                <Button onClick={handleCallSimulation} className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Start Voice Call Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquareText className="h-5 w-5 text-green-600" />
                  Voice Note Recording
                </CardTitle>
                <CardDescription>Send a voice message and get instant responses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Button
                    onClick={handleVoiceNote}
                    size="lg"
                    variant={isRecording ? "destructive" : "default"}
                    className="w-32 h-32 rounded-full"
                  >
                    <Mic className={`h-12 w-12 ${isRecording ? "animate-pulse" : ""}`} />
                  </Button>
                  <p className="mt-4 text-sm text-gray-600">
                    {isRecording ? "Recording... Tap to stop" : "Tap to record your voice note"}
                  </p>
                </div>
                {isRecording && (
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-600 font-medium">Recording in progress...</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Mode */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Story Mode</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Immerse yourself in location-aware stories told by locals in their native language, then translated for you
            in real-time.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Duration: {story.duration}</span>
                      <span>{story.language}</span>
                    </div>
                    <Button className="w-full" onClick={() => setCurrentStory(story.title)}>
                      <Play className="mr-2 h-4 w-4" />
                      Listen to Story
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {currentStory && (
            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Now Playing: {currentStory}</h3>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Button size="sm" variant="outline">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
                      </div>
                      <span className="text-sm text-gray-600">2:34 / 8:00</span>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => saveMemory(`Listened to: ${currentStory}`)}>
                      <Bookmark className="mr-2 h-4 w-4" />
                      Save Memory
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Mood-Based Itinerary */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Mood-Based Itinerary Generator
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  How are you feeling today?
                </CardTitle>
                <CardDescription>Tell us your mood and we'll create the perfect itinerary for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Select value={selectedMood} onValueChange={setSelectedMood}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your mood..." />
                  </SelectTrigger>
                  <SelectContent>
                    {moods.map((mood) => (
                      <SelectItem key={mood.value} value={mood.value}>
                        {mood.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedMood && (
                  <div className="space-y-4">
                    <Badge className={moods.find((m) => m.value === selectedMood)?.color}>
                      Current mood: {moods.find((m) => m.value === selectedMood)?.label}
                    </Badge>
                    <Textarea
                      placeholder="Or describe your mood in your own words... (optional)"
                      className="resize-none"
                    />
                  </div>
                )}

                <Button onClick={generateItinerary} className="w-full" disabled={!selectedMood}>
                  <Zap className="mr-2 h-4 w-4" />
                  Generate My Itinerary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Language Translation Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Real-Time Translation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="h-5 w-5 text-blue-600" />
                    What You Say
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Original (Spanish):</p>
                    <p className="font-medium">"¿Dónde puedo encontrar la mejor paella en Valencia?"</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5 text-green-600" />
                    CityWhisper Understands
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Translated (English):</p>
                    <p className="font-medium">"Where can I find the best paella in Valencia?"</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">CityWhisper's Response:</h3>
                  <p className="text-gray-700 mb-4">
                    "¡Perfecto! Te llevaré a Casa Roberto, donde la abuela María ha estado cocinando paella durante 40
                    años. Está a solo 3 minutos caminando, y te contaré la historia de cómo esta receta familiar se
                    convirtió en leyenda..."
                  </p>
                  <Badge variant="outline">Powered by Google Translate API</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emotion Detection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Emotion-Aware Recommendations
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Smile className="h-5 w-5" />
                    Excited
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">When you sound excited:</p>
                  <ul className="text-sm space-y-1">
                    <li>• High-energy activities</li>
                    <li>• Popular attractions</li>
                    <li>• Group experiences</li>
                    <li>• Photo opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Heart className="h-5 w-5" />
                    Calm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">When you sound peaceful:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Quiet gardens</li>
                    <li>• Meditation spots</li>
                    <li>• Scenic walks</li>
                    <li>• Cozy cafés</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <Star className="h-5 w-5" />
                    Curious
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">When you sound inquisitive:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Museums & galleries</li>
                    <li>• Historical sites</li>
                    <li>• Local workshops</li>
                    <li>• Cultural experiences</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Badge variant="outline" className="text-sm">
                Powered by TextBlob sentiment analysis
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Memories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Your Voice Memories</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-orange-600" />
                    Saved Memories
                  </CardTitle>
                  <CardDescription>Moments you've bookmarked during your travels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {memories.map((memory, index) => (
                      <div key={index} className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm">{memory}</p>
                        <Button size="sm" variant="ghost" className="mt-2">
                          <Play className="mr-1 h-3 w-3" />
                          Replay
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-600" />
                    Create New Memory
                  </CardTitle>
                  <CardDescription>Save this moment with a voice note</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <Button
                      size="lg"
                      className="w-24 h-24 rounded-full"
                      onClick={() => saveMemory("New memory created!")}
                    >
                      <Mic className="h-8 w-8" />
                    </Button>
                    <p className="text-sm text-gray-600">Tap to record a voice memory</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Map Preview */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Discover Nearby Experiences
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 h-64 md:h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-20"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-gray-600 mb-4">Real-time integration with Google Maps & OpenStreetMap</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge className="bg-green-100 text-green-800">📍 Hidden Gems</Badge>
                      <Badge className="bg-blue-100 text-blue-800">🍽️ Local Eateries</Badge>
                      <Badge className="bg-purple-100 text-purple-800">🎭 Cultural Sites</Badge>
                      <Badge className="bg-orange-100 text-orange-800">🌟 Photo Spots</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Travelers Love CityWhisper</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Without Barriers?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered the magic of voice-guided exploration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={handleCallSimulation}
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
            >
              <Globe className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CityWhisper</h3>
              <p className="text-gray-400 text-sm">
                Breaking down language and cultural barriers, one voice interaction at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Voice Calls & Notes</li>
                <li>Story Mode</li>
                <li>Mood Itineraries</li>
                <li>Memory Bookmarks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Tech Stack</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Flask + GPT-4o</li>
                <li>Twilio + Dialogflow</li>
                <li>Google Maps API</li>
                <li>Firebase + TextBlob</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Deploy</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Globe className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Zap className="mr-2 h-4 w-4" />
                  Render Deploy
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 CityWhisper. Designed for inclusive, barrier-free travel experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
