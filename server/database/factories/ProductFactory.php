<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'price' => $this->faker->randomDigit,
            'description' => $this->faker->text,
            'tag'=> $this->faker->randomDigit,
            'category' => $this->faker->name,
            'attribute' => $this->faker->name,
            'stocks' => $this->faker->randomDigit,
            'images' => $this->faker->image,
        ];
    }
}
