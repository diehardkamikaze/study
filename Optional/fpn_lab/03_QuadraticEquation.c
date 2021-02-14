#include "print_bits.h"
#include <stdio.h>
#include <math.h>

void	float_solveNaive(float a, float b, float c, float *root1, float *root2)
{
	float delta = b * b - 4 * a * c;
	if (delta >= 0)
 	{
 		float t = sqrt(delta);
 		*root1 = (-b - t) / (2 * a);
 		*root2 = (-b + t) / (2 * a);
 		printf(" -b - t = %f \n", -b - t);
 		printf(" -b + t = %f \n", -b + t);
	}
}


void	double_solveNaive(double a, double b, double c, double *root1, double *root2)
{
	double delta = b * b - 4 * a * c;
	if (delta >= 0)
 	{
 		double t = sqrt(delta);
 		*root1 = (-b - t) / (2 * a);
 		*root2 = (-b + t) / (2 * a);
 		printf(" -b - t = %f \n", -b - t);
 		printf(" -b + t = %f \n", -b + t);
	}
}



int main(void)
{
	//Рассматриваем квадратное уравнение, дискриминант > 0,
	//конкретно ситуацию, когда числитель в одном из выражений для нахождения корней очень близок к 0
	//0,25 * x^2 + 1000 * x + 1 = 0;
	float a = 0.25f;
	float b = 1000.0f;
	float c = 1.0f;

	printf("Exact roots:\n");
	double root1_exact = -3999.998999999749999;
	print_double(root1_exact);
	printf("%f\n",root1_exact);
	double root2_exact = -0.00100000025000078;
	print_double(root2_exact);
	printf("%f\n",root2_exact);

	printf("Naive version double\n");
	double root1_double, root2_double;
	double_solveNaive(a, b, c, &root1_double, &root2_double);
	printf("root1 = %f ", root1_double);
	printf("root2 = %f\n", root2_double);

	printf("Naive version float\n");
	float root1_float, root2_float;
	float_solveNaive(a, b, c, &root1_float, &root2_float);
	printf("root1 = %f ", root1_float);
	printf("root2 = %f\n", root2_float);
	//Из-за недостаточного кол-ва бит в float b и t, представлены недостаточно точно
	//Что усугубляется операцией -b + t
	


	//написать свою функцию sqrt?
	//теперь рассмотрим ситуацию, при которой коэф. a очень близкок к 0
	return (0);
}
