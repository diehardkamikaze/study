#include <limits.h>
#include <stdio.h>
#include <float.h>

void	print_bits(unsigned long long val, int nbits)
{
	if (nbits != 0)
	{
		print_bits(val >> 1, nbits - 1);
		printf("%lld", val & 1);
	}
}

void	print_fraction_hex(unsigned long long a, int nbits)
{
	int multiplier = 1 << (4 - (nbits % 4));
	unsigned long long b = a * multiplier;
	int nhexs = (nbits + 3) / 4;
	int hexs[16];
	int i = 0;

	while (i < nhexs)
	{
		hexs[i] = b & 15;
		b >>= 4;
		i++;
	}
	i--;
	while (i >= 0)
	{
		printf("%X", hexs[i]);
		i--;
	}
}

void	print_fp(void *x, int w, int t)
{
	unsigned long long x_as_long = 0;
	if (w + t == 63)
		x_as_long = *((unsigned long long *)x);
	else
		x_as_long = *((unsigned int *)x);
	unsigned sign_bit = x_as_long >> (w + t);
	unsigned exponent_bits = (x_as_long >> t) & ((1 << w) - 1);
	unsigned long long mantissa_bits = x_as_long & (((long long int)1 << t) - 1);
	print_bits(sign_bit, 1);
	printf(" ");
	print_bits(exponent_bits, w);
	printf(" ");
	print_bits(mantissa_bits, t);
	printf("\n");
	if (exponent_bits == (1 << w) - 1)
	{
		if (mantissa_bits == 0)
			if (sign_bit)
				printf("%s", "- reserved inifinity\n");
			else
				printf("+ reserved infinity\n");
		else
			printf("  reversed NaN\n");
		return;
	}
	if (sign_bit)
		printf("- ");
	else
		printf("+ ");
	int emax = (1 << (w - 1)) - 1;
	int emin = 1 - emax;
	int bias = emax;
	if (exponent_bits == 0)
	{
		printf("%*s%d%s", w - 5,"[", emin ,"] 0");
		if (mantissa_bits != 0)
		{
			printf(",");
			print_fraction_hex(mantissa_bits, t);
			printf("\n");
		}
		return;
	}
	printf("%*d", w, (int)exponent_bits - bias);
	printf(" 1,");
	print_fraction_hex(mantissa_bits, t);
	printf("\n");
}

void print_double(double x)
{
	print_fp((void *)&x, 11, 52);
}

void print_float(float x)
{
	 print_fp((void*)&x, 8, 23);
}

int main(void)
{
	int one = 1;
	float FLOAT_SUBNORM_MIN = *((float *)&one);
	printf("%.3f = \n", 0.125f);
	print_float(0.125f);

	printf("positive zero = %.1f = \n", 0.0f);
	print_float(0.0f);
	printf("\n");
	printf("negative zero = %.1f = \n", -0.0f);
	print_float(-0.0f);
	printf("\n");
	printf("min positive subnormal float value ~ %.10e = \n", FLOAT_SUBNORM_MIN);
	print_float(FLOAT_SUBNORM_MIN);
	printf("min positive normal float value = %.10e = \n", FLT_MIN);
	print_float(FLT_MIN);
	printf("max normal float value = %.10e = \n", FLT_MAX);
	print_float(FLT_MAX);
	printf("machine epsilon ~ %.10e = \n", FLT_EPSILON);
	print_float(FLT_EPSILON);
	printf("positive infinity = %f = \n", 1.0f/0.0f);
	print_float(1.0f/0.0f);
	printf("negative infinity = %f = \n", -1.0f/0.0f);
	print_float(-1.0f/0.0f);
	printf("quiet %f = \n", 0.0f/0.0f);
	print_float(0.0f/0.0f);
}
